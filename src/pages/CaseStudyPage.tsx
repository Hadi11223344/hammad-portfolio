import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { CaseStudyLayout } from "@/components/case-study/CaseStudyLayout";
import { getCaseStudy } from "@/config/caseStudies";
import { siteConfig } from "@/config/site";

export default function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>();
  const study = slug ? getCaseStudy(slug) : undefined;

  useEffect(() => {
    if (!study) return;
    document.title = `${study.shortTitle} — ${siteConfig.name}`;
    return () => {
      document.title = siteConfig.title;
    };
  }, [study]);

  if (!study) return <Navigate to="/projects" replace />;

  return <CaseStudyLayout study={study} />;
}
