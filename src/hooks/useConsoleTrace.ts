import { useEffect, useRef } from "react";

export const useConsoleTrace = (componentName: string, deps?: Record<string, any>) => {
  const prevDepsRef = useRef<Record<string, any>>();
  const mountedRef = useRef(false);

  useEffect(() => {
    if (!import.meta.env.DEV) return;

    if (!mountedRef.current) {
      // console.log(`[${componentName}] mounted`, deps || {});
      mountedRef.current = true;
    } else if (deps && prevDepsRef.current) {
      // Log changed dependencies
      const changes: Record<string, { from: any; to: any }> = {};
      Object.keys(deps).forEach(key => {
        if (prevDepsRef.current![key] !== deps[key]) {
          changes[key] = { from: prevDepsRef.current![key], to: deps[key] };
        }
      });
      
      if (Object.keys(changes).length > 0) {
        // console.log(`[${componentName}] props changed:`, changes);
      }
    }

    prevDepsRef.current = deps;

    return () => {
      if (import.meta.env.DEV) {
        // console.log(`[${componentName}] unmounted`);
      }
    };
  }, [componentName, ...(deps ? Object.values(deps) : [])]);
};