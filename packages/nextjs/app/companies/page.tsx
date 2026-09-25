"use client";

import type { NextPage } from "next";
import { Projects } from "~~/components/portfolio/Projects";
import { data } from "~~/configs/companies.config";

const CompaniesPage: NextPage = () => {
  return <Projects title="Companies" data={data} imageClassName="flex-none h-12 w-12 md:h-20 md:w-20" />;
};

export default CompaniesPage;
