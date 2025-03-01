"use client";

import type { NextPage } from "next";
import { Projects } from "~~/components/cards/Projects";
import { data } from "~~/configs/organizations.config";

const OrganizationsPage: NextPage = () => {
  return (
    <Projects
      title="Organizations"
      data={data}
      description="Organizations that I have worked for either full-time or as a contractor, contributed to, am a member of, or simply I enjoy their presence in the world."
    />
  );
};

export default OrganizationsPage;
