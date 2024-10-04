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

export type FilteredData = {
    __typename?: 'FilteredData';
    data: Array<Scalars['Float']['output']>;
    labels: Array<Scalars['String']['output']>;
};

export type FootFall = {
    __typename?: 'FootFall';
    date: Scalars['String']['output'];
    id: Scalars['ID']['output'];
    value: Scalars['Float']['output'];
};

export type Incident = {
    __typename?: 'Incident';
    date: Scalars['String']['output'];
    id: Scalars['ID']['output'];
    incidentType: Scalars['String']['output'];
    patientName: Scalars['String']['output'];
};

export type KeyMetrics = {
    __typename?: 'KeyMetrics';
    Bad_Reception_Count: Scalars['Int']['output'];
    Careless_Notes_Count: Scalars['Int']['output'];
    Late_CheckIn_Count: Scalars['Int']['output'];
    Opened_Late_Count: Scalars['Int']['output'];
    Wrong_Diagnosis_Count: Scalars['Int']['output'];
    Wrong_Prescription_Count: Scalars['Int']['output'];
    Wrong_Surgery_Count: Scalars['Int']['output'];
    Wrong_Treatment_Count: Scalars['Int']['output'];
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

export type PatientSatisfaction = {
    __typename?: 'PatientSatisfaction';
    date: Scalars['String']['output'];
    id: Scalars['ID']['output'];
    value: Scalars['Float']['output'];
};

export type Query = {
    __typename?: 'Query';
    footFallData: FilteredData;
    incidents: Array<Incident>;
    keyMetrics: KeyMetrics;
    patientSatisfactionData: FilteredData;
    revenueData: FilteredData;
    staffMembers: Array<StaffMember>;
};


export type QueryFootFallDataArgs = {
    endDate?: InputMaybe<Scalars['String']['input']>;
    period?: InputMaybe<Scalars['String']['input']>;
    startDate?: InputMaybe<Scalars['String']['input']>;
};


export type QueryIncidentsArgs = {
    endDate?: InputMaybe<Scalars['String']['input']>;
    incidentType?: InputMaybe<Scalars['String']['input']>;
    startDate?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPatientSatisfactionDataArgs = {
    endDate?: InputMaybe<Scalars['String']['input']>;
    period?: InputMaybe<Scalars['String']['input']>;
    startDate?: InputMaybe<Scalars['String']['input']>;
};


export type QueryRevenueDataArgs = {
    endDate?: InputMaybe<Scalars['String']['input']>;
    period?: InputMaybe<Scalars['String']['input']>;
    startDate?: InputMaybe<Scalars['String']['input']>;
};


export type QueryStaffMembersArgs = {
    sortBy?: InputMaybe<Scalars['String']['input']>;
    sortOrder?: InputMaybe<Scalars['String']['input']>;
};

export type Revenue = {
    __typename?: 'Revenue';
    date: Scalars['String']['output'];
    id: Scalars['ID']['output'];
    value: Scalars['Float']['output'];
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

export type FootFallDataQueryVariables = Exact<{
    startDate?: InputMaybe<Scalars['String']['input']>;
    endDate?: InputMaybe<Scalars['String']['input']>;
    period?: InputMaybe<Scalars['String']['input']>;
}>;


export type FootFallDataQuery = {
    __typename?: 'Query',
    footFallData: { __typename?: 'FilteredData', labels: Array<string>, data: Array<number> }
};

export type PatientSatisfactionDataQueryVariables = Exact<{
    startDate?: InputMaybe<Scalars['String']['input']>;
    endDate?: InputMaybe<Scalars['String']['input']>;
    period?: InputMaybe<Scalars['String']['input']>;
}>;


export type PatientSatisfactionDataQuery = {
    __typename?: 'Query',
    patientSatisfactionData: { __typename?: 'FilteredData', labels: Array<string>, data: Array<number> }
};

export type RevenueQueryVariables = Exact<{
    startDate?: InputMaybe<Scalars['String']['input']>;
    endDate?: InputMaybe<Scalars['String']['input']>;
    period?: InputMaybe<Scalars['String']['input']>;
}>;


export type RevenueQuery = {
    __typename?: 'Query',
    revenueData: { __typename?: 'FilteredData', labels: Array<string>, data: Array<number> }
};

export type StaffMembersQueryVariables = Exact<{ [key: string]: never; }>;


export type StaffMembersQuery = {
    __typename?: 'Query',
    staffMembers: Array<{
        __typename?: 'StaffMember',
        id: string,
        name: string,
        efficiency: number,
        nps: number,
        efficiencyDelta: number,
        reportedIssues: number
    }>
};

export type IncidentsQueryVariables = Exact<{ [key: string]: never; }>;


export type IncidentsQuery = {
    __typename?: 'Query',
    incidents: Array<{ __typename?: 'Incident', id: string, patientName: string, incidentType: string, date: string }>
};

export type KeyMetricsQueryVariables = Exact<{ [key: string]: never; }>;


export type KeyMetricsQuery = {
    __typename?: 'Query',
    keyMetrics: {
        __typename?: 'KeyMetrics',
        Wrong_Prescription_Count: number,
        Opened_Late_Count: number,
        Wrong_Diagnosis_Count: number,
        Wrong_Treatment_Count: number,
        Wrong_Surgery_Count: number,
        Late_CheckIn_Count: number,
        Careless_Notes_Count: number,
        Bad_Reception_Count: number
    }
};


export const FootFallDataDocument = {
    "kind": "Document", "definitions": [{
        "kind": "OperationDefinition",
        "operation": "query",
        "name": {"kind": "Name", "value": "FootFallData"},
        "variableDefinitions": [{
            "kind": "VariableDefinition",
            "variable": {"kind": "Variable", "name": {"kind": "Name", "value": "startDate"}},
            "type": {"kind": "NamedType", "name": {"kind": "Name", "value": "String"}}
        }, {
            "kind": "VariableDefinition",
            "variable": {"kind": "Variable", "name": {"kind": "Name", "value": "endDate"}},
            "type": {"kind": "NamedType", "name": {"kind": "Name", "value": "String"}}
        }, {
            "kind": "VariableDefinition",
            "variable": {"kind": "Variable", "name": {"kind": "Name", "value": "period"}},
            "type": {"kind": "NamedType", "name": {"kind": "Name", "value": "String"}}
        }],
        "selectionSet": {
            "kind": "SelectionSet",
            "selections": [{
                "kind": "Field",
                "name": {"kind": "Name", "value": "footFallData"},
                "arguments": [{
                    "kind": "Argument",
                    "name": {"kind": "Name", "value": "startDate"},
                    "value": {"kind": "Variable", "name": {"kind": "Name", "value": "startDate"}}
                }, {
                    "kind": "Argument",
                    "name": {"kind": "Name", "value": "endDate"},
                    "value": {"kind": "Variable", "name": {"kind": "Name", "value": "endDate"}}
                }, {
                    "kind": "Argument",
                    "name": {"kind": "Name", "value": "period"},
                    "value": {"kind": "Variable", "name": {"kind": "Name", "value": "period"}}
                }],
                "selectionSet": {
                    "kind": "SelectionSet",
                    "selections": [{"kind": "Field", "name": {"kind": "Name", "value": "labels"}}, {
                        "kind": "Field",
                        "name": {"kind": "Name", "value": "data"}
                    }]
                }
            }]
        }
    }]
} as unknown as DocumentNode<FootFallDataQuery, FootFallDataQueryVariables>;
export const PatientSatisfactionDataDocument = {
    "kind": "Document", "definitions": [{
        "kind": "OperationDefinition",
        "operation": "query",
        "name": {"kind": "Name", "value": "PatientSatisfactionData"},
        "variableDefinitions": [{
            "kind": "VariableDefinition",
            "variable": {"kind": "Variable", "name": {"kind": "Name", "value": "startDate"}},
            "type": {"kind": "NamedType", "name": {"kind": "Name", "value": "String"}}
        }, {
            "kind": "VariableDefinition",
            "variable": {"kind": "Variable", "name": {"kind": "Name", "value": "endDate"}},
            "type": {"kind": "NamedType", "name": {"kind": "Name", "value": "String"}}
        }, {
            "kind": "VariableDefinition",
            "variable": {"kind": "Variable", "name": {"kind": "Name", "value": "period"}},
            "type": {"kind": "NamedType", "name": {"kind": "Name", "value": "String"}}
        }],
        "selectionSet": {
            "kind": "SelectionSet",
            "selections": [{
                "kind": "Field",
                "name": {"kind": "Name", "value": "patientSatisfactionData"},
                "arguments": [{
                    "kind": "Argument",
                    "name": {"kind": "Name", "value": "startDate"},
                    "value": {"kind": "Variable", "name": {"kind": "Name", "value": "startDate"}}
                }, {
                    "kind": "Argument",
                    "name": {"kind": "Name", "value": "endDate"},
                    "value": {"kind": "Variable", "name": {"kind": "Name", "value": "endDate"}}
                }, {
                    "kind": "Argument",
                    "name": {"kind": "Name", "value": "period"},
                    "value": {"kind": "Variable", "name": {"kind": "Name", "value": "period"}}
                }],
                "selectionSet": {
                    "kind": "SelectionSet",
                    "selections": [{"kind": "Field", "name": {"kind": "Name", "value": "labels"}}, {
                        "kind": "Field",
                        "name": {"kind": "Name", "value": "data"}
                    }]
                }
            }]
        }
    }]
} as unknown as DocumentNode<PatientSatisfactionDataQuery, PatientSatisfactionDataQueryVariables>;
export const RevenueDocument = {
    "kind": "Document", "definitions": [{
        "kind": "OperationDefinition",
        "operation": "query",
        "name": {"kind": "Name", "value": "Revenue"},
        "variableDefinitions": [{
            "kind": "VariableDefinition",
            "variable": {"kind": "Variable", "name": {"kind": "Name", "value": "startDate"}},
            "type": {"kind": "NamedType", "name": {"kind": "Name", "value": "String"}}
        }, {
            "kind": "VariableDefinition",
            "variable": {"kind": "Variable", "name": {"kind": "Name", "value": "endDate"}},
            "type": {"kind": "NamedType", "name": {"kind": "Name", "value": "String"}}
        }, {
            "kind": "VariableDefinition",
            "variable": {"kind": "Variable", "name": {"kind": "Name", "value": "period"}},
            "type": {"kind": "NamedType", "name": {"kind": "Name", "value": "String"}}
        }],
        "selectionSet": {
            "kind": "SelectionSet",
            "selections": [{
                "kind": "Field",
                "name": {"kind": "Name", "value": "revenueData"},
                "arguments": [{
                    "kind": "Argument",
                    "name": {"kind": "Name", "value": "startDate"},
                    "value": {"kind": "Variable", "name": {"kind": "Name", "value": "startDate"}}
                }, {
                    "kind": "Argument",
                    "name": {"kind": "Name", "value": "endDate"},
                    "value": {"kind": "Variable", "name": {"kind": "Name", "value": "endDate"}}
                }, {
                    "kind": "Argument",
                    "name": {"kind": "Name", "value": "period"},
                    "value": {"kind": "Variable", "name": {"kind": "Name", "value": "period"}}
                }],
                "selectionSet": {
                    "kind": "SelectionSet",
                    "selections": [{"kind": "Field", "name": {"kind": "Name", "value": "labels"}}, {
                        "kind": "Field",
                        "name": {"kind": "Name", "value": "data"}
                    }]
                }
            }]
        }
    }]
} as unknown as DocumentNode<RevenueQuery, RevenueQueryVariables>;
export const StaffMembersDocument = {
    "kind": "Document",
    "definitions": [{
        "kind": "OperationDefinition",
        "operation": "query",
        "name": {"kind": "Name", "value": "StaffMembers"},
        "selectionSet": {
            "kind": "SelectionSet",
            "selections": [{
                "kind": "Field",
                "name": {"kind": "Name", "value": "staffMembers"},
                "selectionSet": {
                    "kind": "SelectionSet",
                    "selections": [{"kind": "Field", "name": {"kind": "Name", "value": "id"}}, {
                        "kind": "Field",
                        "name": {"kind": "Name", "value": "name"}
                    }, {"kind": "Field", "name": {"kind": "Name", "value": "efficiency"}}, {
                        "kind": "Field",
                        "name": {"kind": "Name", "value": "nps"}
                    }, {"kind": "Field", "name": {"kind": "Name", "value": "efficiencyDelta"}}, {
                        "kind": "Field",
                        "name": {"kind": "Name", "value": "reportedIssues"}
                    }]
                }
            }]
        }
    }]
} as unknown as DocumentNode<StaffMembersQuery, StaffMembersQueryVariables>;
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
export const KeyMetricsDocument = {
    "kind": "Document",
    "definitions": [{
        "kind": "OperationDefinition",
        "operation": "query",
        "name": {"kind": "Name", "value": "KeyMetrics"},
        "selectionSet": {
            "kind": "SelectionSet",
            "selections": [{
                "kind": "Field",
                "name": {"kind": "Name", "value": "keyMetrics"},
                "selectionSet": {
                    "kind": "SelectionSet",
                    "selections": [{
                        "kind": "Field",
                        "name": {"kind": "Name", "value": "Wrong_Prescription_Count"}
                    }, {"kind": "Field", "name": {"kind": "Name", "value": "Opened_Late_Count"}}, {
                        "kind": "Field",
                        "name": {"kind": "Name", "value": "Wrong_Diagnosis_Count"}
                    }, {"kind": "Field", "name": {"kind": "Name", "value": "Wrong_Treatment_Count"}}, {
                        "kind": "Field",
                        "name": {"kind": "Name", "value": "Wrong_Surgery_Count"}
                    }, {"kind": "Field", "name": {"kind": "Name", "value": "Late_CheckIn_Count"}}, {
                        "kind": "Field",
                        "name": {"kind": "Name", "value": "Careless_Notes_Count"}
                    }, {"kind": "Field", "name": {"kind": "Name", "value": "Bad_Reception_Count"}}]
                }
            }]
        }
    }]
} as unknown as DocumentNode<KeyMetricsQuery, KeyMetricsQueryVariables>;