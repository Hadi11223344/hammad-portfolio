import { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { CaseStudyLayout } from "@/components/case-study/CaseStudyLayout";
import { caseStudies } from "@/config/caseStudies";
import { siteConfig } from "@/config/site";

export default function CaseStudyByRoute() {
  const { pathname } = useLocation();
  const study = caseStudies.find((c) => c.route === pathname);

  useEffect(() => {
    if (!study) return;
    document.title = `${study.shortTitle} — ${siteConfig.name}`;
    return () => {
      document.title = siteConfig.title;
    };
  }, [study]);

  if (!study) return <Navigate to="/" replace />;

  return <CaseStudyLayout study={study} />;
}
