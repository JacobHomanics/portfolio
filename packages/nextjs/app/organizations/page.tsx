"use client";

import type { NextPage } from "next";
import { Projects } from "~~/components/Projects";
import { data } from "~~/components/configs/organizations.config";

const OrganizationsPage: NextPage = () => {
  return <Projects title="Organizations" data={data} />;
};

export default OrganizationsPage;
