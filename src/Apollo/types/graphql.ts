/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
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
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: Date; output: Date; }
};

export type AdminInput = {
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  role: Scalars['String']['input'];
};

export type Categories = {
  __typename?: 'Categories';
  meta?: Maybe<Meta>;
  results?: Maybe<Array<Category>>;
};

export type Category = {
  __typename?: 'Category';
  created_at: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['Float']['output'];
  is_top: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  position: Scalars['Float']['output'];
  slug: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
};

export type CategoryDto = {
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  is_top: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  position: Scalars['Float']['input'];
};

export type FacebookInput = {
  accessToken: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type GetUsers = {
  __typename?: 'GetUsers';
  meta?: Maybe<Meta>;
  results?: Maybe<Array<User>>;
};

export type GoogleInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  idToken?: InputMaybe<Scalars['String']['input']>;
};

export type LoginSuccess = {
  __typename?: 'LoginSuccess';
  message: Scalars['String']['output'];
  token: Scalars['String']['output'];
};

export type Meta = {
  __typename?: 'Meta';
  currentPage?: Maybe<Scalars['Int']['output']>;
  itemCount?: Maybe<Scalars['Int']['output']>;
  itemsPerPage?: Maybe<Scalars['Int']['output']>;
  totalItems?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addAdmins: SuccessInfo;
  addCategory: SuccessInfo;
  banOrUnbannedUser: SuccessInfo;
  deleteCategory: SuccessInfo;
  facebookLogin: LoginSuccess;
  googleLogin: LoginSuccess;
  removeAdmin: SuccessInfo;
  resendOtp: SuccessInfo;
  signup: SuccessInfo;
  updateCategory: SuccessInfo;
  updateProfile: SuccessInfo;
  verifyPhone: LoginSuccess;
};


export type MutationAddAdminsArgs = {
  adminInput: AdminInput;
};


export type MutationAddCategoryArgs = {
  categoryDto: CategoryDto;
};


export type MutationBanOrUnbannedUserArgs = {
  id: Scalars['String']['input'];
  status: Scalars['Boolean']['input'];
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['Float']['input'];
};


export type MutationFacebookLoginArgs = {
  facebookInput: FacebookInput;
};


export type MutationGoogleLoginArgs = {
  googleInput: GoogleInput;
};


export type MutationRemoveAdminArgs = {
  id: Scalars['String']['input'];
};


export type MutationResendOtpArgs = {
  phone: Scalars['String']['input'];
};


export type MutationSignupArgs = {
  signupInput: SignupInput;
};


export type MutationUpdateCategoryArgs = {
  categoryDto: CategoryDto;
  id: Scalars['Float']['input'];
};


export type MutationUpdateProfileArgs = {
  updateUserInput: UpdateUserInput;
};


export type MutationVerifyPhoneArgs = {
  verifyPhoneInput: VerifyPhoneInput;
};

export type Provider = {
  __typename?: 'Provider';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  getAdmins: GetUsers;
  getCategories: Categories;
  getCategory: Category;
  getProfile: User;
  getUsers: GetUsers;
};


export type QueryGetAdminsArgs = {
  searchInput: SearchDto;
};


export type QueryGetCategoriesArgs = {
  searchDto: SearchDto;
};


export type QueryGetCategoryArgs = {
  slug: Scalars['String']['input'];
};


export type QueryGetUsersArgs = {
  searchInput: SearchDto;
};

export type SearchDto = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type SignupInput = {
  as: Array<Scalars['String']['input']>;
  phone: Scalars['String']['input'];
};

export type SuccessInfo = {
  __typename?: 'SuccessInfo';
  message: Scalars['String']['output'];
};

export type UpdateUserInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  avatar?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['DateTime']['output'];
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  is_banned: Scalars['Boolean']['output'];
  is_verified: Scalars['Boolean']['output'];
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Provider>;
  role: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
};

export type VerifyPhoneInput = {
  otp: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

export type SignupMutationVariables = Exact<{
  signupInput: SignupInput;
}>;


export type SignupMutation = { __typename?: 'Mutation', signup: { __typename?: 'SuccessInfo', message: string } };

export type VerifyPhoneMutationVariables = Exact<{
  verifyPhoneInput: VerifyPhoneInput;
}>;


export type VerifyPhoneMutation = { __typename?: 'Mutation', verifyPhone: { __typename?: 'LoginSuccess', message: string, token: string } };

export type ResendOtpMutationVariables = Exact<{
  phone: Scalars['String']['input'];
}>;


export type ResendOtpMutation = { __typename?: 'Mutation', resendOtp: { __typename?: 'SuccessInfo', message: string } };

export type GetProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProfileQuery = { __typename?: 'Query', getProfile: { __typename?: 'User', id: string, name?: string | null, phone?: string | null, email?: string | null, avatar?: string | null, is_verified: boolean, role: string } };

export type AddCategoryMutationVariables = Exact<{
  categoryDto: CategoryDto;
}>;


export type AddCategoryMutation = { __typename?: 'Mutation', addCategory: { __typename?: 'SuccessInfo', message: string } };

export type GetCategoriesQueryVariables = Exact<{
  searchDto: SearchDto;
}>;


export type GetCategoriesQuery = { __typename?: 'Query', getCategories: { __typename?: 'Categories', results?: Array<{ __typename?: 'Category', id: number, name: string, icon?: string | null, slug: string, position: number, is_top: boolean }> | null, meta?: { __typename?: 'Meta', itemCount?: number | null, totalItems?: number | null, itemsPerPage?: number | null, totalPages?: number | null, currentPage?: number | null } | null } };

export type DeleteCategoryMutationVariables = Exact<{
  deleteCategoryId: Scalars['Float']['input'];
}>;


export type DeleteCategoryMutation = { __typename?: 'Mutation', deleteCategory: { __typename?: 'SuccessInfo', message: string } };

export type GetCategoryQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetCategoryQuery = { __typename?: 'Query', getCategory: { __typename?: 'Category', id: number, name: string, description?: string | null, icon?: string | null, position: number, is_top: boolean } };

export type UpdateCategoryMutationVariables = Exact<{
  categoryDto: CategoryDto;
  updateCategoryId: Scalars['Float']['input'];
}>;


export type UpdateCategoryMutation = { __typename?: 'Mutation', updateCategory: { __typename?: 'SuccessInfo', message: string } };


export const SignupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"signup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"signupInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignupInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"signupInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"signupInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<SignupMutation, SignupMutationVariables>;
export const VerifyPhoneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"verifyPhone"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"verifyPhoneInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"VerifyPhoneInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verifyPhone"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"verifyPhoneInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"verifyPhoneInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<VerifyPhoneMutation, VerifyPhoneMutationVariables>;
export const ResendOtpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"resendOtp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"phone"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resendOtp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"phone"},"value":{"kind":"Variable","name":{"kind":"Name","value":"phone"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<ResendOtpMutation, ResendOtpMutationVariables>;
export const GetProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"is_verified"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]}}]} as unknown as DocumentNode<GetProfileQuery, GetProfileQueryVariables>;
export const AddCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"categoryDto"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CategoryDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"categoryDto"},"value":{"kind":"Variable","name":{"kind":"Name","value":"categoryDto"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<AddCategoryMutation, AddCategoryMutationVariables>;
export const GetCategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCategories"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchDto"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SearchDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCategories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"searchDto"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchDto"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"is_top"}}]}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"itemCount"}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}},{"kind":"Field","name":{"kind":"Name","value":"itemsPerPage"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}}]}}]}}]}}]} as unknown as DocumentNode<GetCategoriesQuery, GetCategoriesQueryVariables>;
export const DeleteCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteCategoryId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteCategoryId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<DeleteCategoryMutation, DeleteCategoryMutationVariables>;
export const GetCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"is_top"}}]}}]}}]} as unknown as DocumentNode<GetCategoryQuery, GetCategoryQueryVariables>;
export const UpdateCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"categoryDto"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CategoryDto"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateCategoryId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"categoryDto"},"value":{"kind":"Variable","name":{"kind":"Name","value":"categoryDto"}}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateCategoryId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<UpdateCategoryMutation, UpdateCategoryMutationVariables>;