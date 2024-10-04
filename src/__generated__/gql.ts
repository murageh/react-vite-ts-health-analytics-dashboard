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
    "\n    query FootFallData($startDate: String, $endDate: String, $period: String) {\n        footFallData(startDate: $startDate, endDate: $endDate, period: $period) {\n            labels\n            data\n            aggregate {\n                sum\n                avg\n                min\n                max\n                count\n                delta\n            }\n        }\n    }\n": types.FootFallDataDocument,
    "\n    query PatientSatisfactionData($startDate: String, $endDate: String, $period: String) {\n        patientSatisfactionData(startDate: $startDate, endDate: $endDate, period: $period) {\n            labels\n            data\n            aggregate {\n                sum\n                avg\n                min\n                max\n                count\n                delta\n            }\n        }\n    }\n": types.PatientSatisfactionDataDocument,
    "\n  query Revenue($startDate: String, $endDate: String, $period: String) {\n    revenueData(startDate: $startDate, endDate: $endDate, period: $period) {\n      labels\n      data\n      aggregate {\n                sum\n                avg\n                min\n                max\n                count\n                delta\n            }\n    }\n  }\n": types.RevenueDocument,
    "\n  query StaffMembers {\n    staffMembers {\n      id\n      name\n      efficiency\n      nps\n      efficiencyDelta\n      reportedIssues\n    }\n  }\n": types.StaffMembersDocument,
    "\n    query Incidents {\n        incidents {\n            id\n            patientName\n            incidentType\n            date\n        }\n    }\n": types.IncidentsDocument,
    "\n    query KeyMetrics {\n        keyMetrics {\n            Wrong_Prescription_Count\n            Opened_Late_Count\n            Wrong_Diagnosis_Count\n            Wrong_Treatment_Count\n            Wrong_Surgery_Count\n            Late_CheckIn_Count\n            Careless_Notes_Count\n            Bad_Reception_Count\n        }\n    }\n": types.KeyMetricsDocument,
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
export function gql(source: "\n    query FootFallData($startDate: String, $endDate: String, $period: String) {\n        footFallData(startDate: $startDate, endDate: $endDate, period: $period) {\n            labels\n            data\n            aggregate {\n                sum\n                avg\n                min\n                max\n                count\n                delta\n            }\n        }\n    }\n"): (typeof documents)["\n    query FootFallData($startDate: String, $endDate: String, $period: String) {\n        footFallData(startDate: $startDate, endDate: $endDate, period: $period) {\n            labels\n            data\n            aggregate {\n                sum\n                avg\n                min\n                max\n                count\n                delta\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query PatientSatisfactionData($startDate: String, $endDate: String, $period: String) {\n        patientSatisfactionData(startDate: $startDate, endDate: $endDate, period: $period) {\n            labels\n            data\n            aggregate {\n                sum\n                avg\n                min\n                max\n                count\n                delta\n            }\n        }\n    }\n"): (typeof documents)["\n    query PatientSatisfactionData($startDate: String, $endDate: String, $period: String) {\n        patientSatisfactionData(startDate: $startDate, endDate: $endDate, period: $period) {\n            labels\n            data\n            aggregate {\n                sum\n                avg\n                min\n                max\n                count\n                delta\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Revenue($startDate: String, $endDate: String, $period: String) {\n    revenueData(startDate: $startDate, endDate: $endDate, period: $period) {\n      labels\n      data\n      aggregate {\n                sum\n                avg\n                min\n                max\n                count\n                delta\n            }\n    }\n  }\n"): (typeof documents)["\n  query Revenue($startDate: String, $endDate: String, $period: String) {\n    revenueData(startDate: $startDate, endDate: $endDate, period: $period) {\n      labels\n      data\n      aggregate {\n                sum\n                avg\n                min\n                max\n                count\n                delta\n            }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query StaffMembers {\n    staffMembers {\n      id\n      name\n      efficiency\n      nps\n      efficiencyDelta\n      reportedIssues\n    }\n  }\n"): (typeof documents)["\n  query StaffMembers {\n    staffMembers {\n      id\n      name\n      efficiency\n      nps\n      efficiencyDelta\n      reportedIssues\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query Incidents {\n        incidents {\n            id\n            patientName\n            incidentType\n            date\n        }\n    }\n"): (typeof documents)["\n    query Incidents {\n        incidents {\n            id\n            patientName\n            incidentType\n            date\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query KeyMetrics {\n        keyMetrics {\n            Wrong_Prescription_Count\n            Opened_Late_Count\n            Wrong_Diagnosis_Count\n            Wrong_Treatment_Count\n            Wrong_Surgery_Count\n            Late_CheckIn_Count\n            Careless_Notes_Count\n            Bad_Reception_Count\n        }\n    }\n"): (typeof documents)["\n    query KeyMetrics {\n        keyMetrics {\n            Wrong_Prescription_Count\n            Opened_Late_Count\n            Wrong_Diagnosis_Count\n            Wrong_Treatment_Count\n            Wrong_Surgery_Count\n            Late_CheckIn_Count\n            Careless_Notes_Count\n            Bad_Reception_Count\n        }\n    }\n"];

export function gql(source: string) {
    return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;