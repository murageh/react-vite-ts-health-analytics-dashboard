/* eslint-disable */
import * as types from './graphql';
import {TypedDocumentNode as DocumentNode} from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    query Incidents {\n        incidents {\n            id\n            patientName\n            incidentType\n            date\n        }\n    }\n": types.IncidentsDocument,
    "\n    query FootFallQuery {\n        footFallData\n    }\n": types.FootFallQueryDocument,
    "\n    query PatientSatisfactionData {\n        patientSatisfactionData\n    }\n": types.PatientSatisfactionDataDocument,
    "\n  query Revenue {\n    revenueData\n  }\n": types.RevenueDocument,
    "\n  query StaffMembers {\n    staffMembers {\n      id\n      name\n      efficiency\n      nps\n      efficiencyDelta\n      reportedIssues\n    }\n  }\n": types.StaffMembersDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query Incidents {\n        incidents {\n            id\n            patientName\n            incidentType\n            date\n        }\n    }\n"): (typeof documents)["\n    query Incidents {\n        incidents {\n            id\n            patientName\n            incidentType\n            date\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query FootFallQuery {\n        footFallData\n    }\n"): (typeof documents)["\n    query FootFallQuery {\n        footFallData\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query PatientSatisfactionData {\n        patientSatisfactionData\n    }\n"): (typeof documents)["\n    query PatientSatisfactionData {\n        patientSatisfactionData\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Revenue {\n    revenueData\n  }\n"): (typeof documents)["\n  query Revenue {\n    revenueData\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query StaffMembers {\n    staffMembers {\n      id\n      name\n      efficiency\n      nps\n      efficiencyDelta\n      reportedIssues\n    }\n  }\n"): (typeof documents)["\n  query StaffMembers {\n    staffMembers {\n      id\n      name\n      efficiency\n      nps\n      efficiencyDelta\n      reportedIssues\n    }\n  }\n"];

export function gql(source: string) {
    return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;