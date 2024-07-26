import type { Schema, Attribute } from '@strapi/strapi';

export interface JobOpeningsPosition extends Schema.Component {
  collectionName: 'components_job_openings_positions';
  info: {
    displayName: 'Position';
    description: '';
  };
  attributes: {
    JobPosition: Attribute.String & Attribute.Required;
    Location: Attribute.String & Attribute.Required;
    Experience: Attribute.String & Attribute.Required;
    ApplyLink: Attribute.String & Attribute.Required;
  };
}

export interface JobOpeningsOpening extends Schema.Component {
  collectionName: 'components_job_openings_openings';
  info: {
    displayName: 'Opening';
    description: '';
  };
  attributes: {
    RoleCategory: Attribute.String & Attribute.Required;
    MultiplePositions: Attribute.Component<'job-openings.position', true>;
  };
}

export interface CaseStudiesTestimonials extends Schema.Component {
  collectionName: 'components_case_studies_testimonials';
  info: {
    displayName: 'Testimonials';
  };
  attributes: {
    TestimonialDescription: Attribute.Text & Attribute.Required;
    ClientName: Attribute.String & Attribute.Required;
  };
}

export interface CaseStudiesSolutions extends Schema.Component {
  collectionName: 'components_case_studies_solutions';
  info: {
    displayName: 'Solutions';
  };
  attributes: {
    Solution: Attribute.Text;
  };
}

export interface CaseStudiesChallenges extends Schema.Component {
  collectionName: 'components_case_studies_challenges';
  info: {
    displayName: 'Challenges';
  };
  attributes: {
    ChallengesDescription: Attribute.Text;
  };
}

export interface CaseStudiesBenefits extends Schema.Component {
  collectionName: 'components_case_studies_benefits';
  info: {
    displayName: 'Benefits';
  };
  attributes: {
    BenefitsDescription: Attribute.Text & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'job-openings.position': JobOpeningsPosition;
      'job-openings.opening': JobOpeningsOpening;
      'case-studies.testimonials': CaseStudiesTestimonials;
      'case-studies.solutions': CaseStudiesSolutions;
      'case-studies.challenges': CaseStudiesChallenges;
      'case-studies.benefits': CaseStudiesBenefits;
    }
  }
}
