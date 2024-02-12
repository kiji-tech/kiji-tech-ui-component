"use client";

import "./breadcrumb.scss";

export type BreadcrumbProps = {
  links?: {
    url: string;
    label: string;
  }[];
};

export default function Breadcrumb({ links = [] }: BreadcrumbProps) {
  return (
    <div className="breadcrumb">
      {links.map((l, index) => {
        return (
          <div>
            {index != links.length - 1 ? (
              <>
                <a href={l.url}>{l.label}</a> &nbsp;&nbsp;／&nbsp;&nbsp;
              </>
            ) : (
              <span>{l.label}</span>
            )}
          </div>
        );
      })}
    </div>
  );
}
