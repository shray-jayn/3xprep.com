// API handler for lead capture (serverless/Express compatible)
export interface LeadData {
  name: string;
  email: string;
  phone: string;
  city: string;
  test: "SAT" | "LSAT" | "MCAT";
  preferredTime?: string;
  notes?: string;
  mode: "consultation" | "diagnostic";
}

export interface LeadResponse {
  success: boolean;
  message: string;
  id?: string;
}

// Validate E.164 phone format (basic)
function normalizePhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `+1${cleaned}`;
  }
  if (cleaned.length === 11 && cleaned.startsWith('1')) {
    return `+${cleaned}`;
  }
  return phone; // Return as-is if can't normalize
}

// Main handler function
export async function handleLeadSubmission(data: LeadData): Promise<LeadResponse> {
  try {
    // Validate required fields
    if (!data.name || !data.email || !data.phone || !data.city || !data.test) {
      return {
        success: false,
        message: "Missing required fields"
      };
    }

    // Normalize phone
    const normalizedPhone = normalizePhone(data.phone);

    // Create lead object
    const lead = {
      ...data,
      phone: normalizedPhone,
      timestamp: new Date().toISOString(),
      id: `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };

    // In dev: log to console
    if (process.env.NODE_ENV === "development") {
      console.log("New lead captured:", lead);
    }

    // Production webhook (if configured)
    const webhookUrl = process.env.WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(lead),
        });
      } catch (error) {
        console.error("Webhook failed:", error);
        // Don't fail the whole request if webhook fails
      }
    }

    // TODO: Save to persistent storage (database/file)
    // TODO: Send confirmation email
    // TODO: Notify sales team

    return {
      success: true,
      message: "Lead captured successfully",
      id: lead.id
    };

  } catch (error) {
    console.error("Lead submission error:", error);
    return {
      success: false,
      message: "Internal server error"
    };
  }
}

// Express.js/Vercel API route handler
export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  try {
    const result = await handleLeadSubmission(req.body);
    
    if (result.success) {
      res.status(200).json(result);
    } else {
      res.status(400).json(result);
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
}