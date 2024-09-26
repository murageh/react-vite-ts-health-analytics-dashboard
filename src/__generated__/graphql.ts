/* eslint-disable */
import {TypedDocumentNode as DocumentNode} from '@graphql-typed-document-node/core';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: { input: string; output: string; }
    String: { input: string; output: string; }
    Boolean: { input: boolean; output: boolean; }
    Int: { input: number; output: number; }
    Float: { input: number; output: number; }
};

export type Incident = {
    __typename?: 'Incident';
    date: Scalars['String']['output'];
    id: Scalars['ID']['output'];
    incidentType: Scalars['String']['output'];
    patientName: Scalars['String']['output'];
};

export type Mutation = {
    __typename?: 'Mutation';
    createIncident: Incident;
    createStaffMember: StaffMember;
};


export type MutationCreateIncidentArgs = {
    date: Scalars['String']['input'];
    incidentType: Scalars['String']['input'];
    patientName: Scalars['String']['input'];
};


export type MutationCreateStaffMemberArgs = {
    efficiency: Scalars['Float']['input'];
    efficiencyDelta: Scalars['Float']['input'];
    name: Scalars['String']['input'];
    nps: Scalars['Float']['input'];
    reportedIssues: Scalars['Int']['input'];
};

export type Query = {
    __typename?: 'Query';
    footFallData: Array<Scalars['Float']['output']>;
    incidents: Array<Incident>;
    keyMetrics: Array<Scalars['Int']['output']>;
    patientSatisfactionData: Array<Scalars['Float']['output']>;
    revenueData: Array<Scalars['Float']['output']>;
    staffMembers: Array<StaffMember>;
};

export type StaffMember = {
    __typename?: 'StaffMember';
    efficiency: Scalars['Float']['output'];
    efficiencyDelta: Scalars['Float']['output'];
    id: Scalars['ID']['output'];
    name: Scalars['String']['output'];
    nps: Scalars['Float']['output'];
    reportedIssues: Scalars['Int']['output'];
};

export type IncidentsQueryVariables = Exact<{ [key: string]: never; }>;


export type IncidentsQuery = {
    __typename?: 'Query',
    incidents: Array<{ __typename?: 'Incident', id: string, patientName: string, incidentType: string, date: string }>
};


export const IncidentsDocument = {
    "kind": "Document",
    "definitions": [{
        "kind": "OperationDefinition",
        "operation": "query",
        "name": {"kind": "Name", "value": "Incidents"},
        "selectionSet": {
            "kind": "SelectionSet",
            "selections": [{
                "kind": "Field",
                "name": {"kind": "Name", "value": "incidents"},
                "selectionSet": {
                    "kind": "SelectionSet",
                    "selections": [{"kind": "Field", "name": {"kind": "Name", "value": "id"}}, {
                        "kind": "Field",
                        "name": {"kind": "Name", "value": "patientName"}
                    }, {"kind": "Field", "name": {"kind": "Name", "value": "incidentType"}}, {
                        "kind": "Field",
                        "name": {"kind": "Name", "value": "date"}
                    }]
                }
            }]
        }
    }]
} as unknown as DocumentNode<IncidentsQuery, IncidentsQueryVariables>;