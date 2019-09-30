/* eslint-disable */
// THIS IS A GENERATED FILE, use `yarn generate:graphql:ts to regenerate`
import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Character = {
  readonly id: Scalars['ID'],
  readonly name: Scalars['String'],
  readonly isVillain: Scalars['Boolean'],
  readonly age?: Maybe<Scalars['Int']>,
  readonly height: Scalars['Float'],
};


export type CharacterHeightArgs = {
  unit?: Maybe<LengthUnit>
};

export type Droid = Character & {
  readonly __typename?: 'Droid',
  readonly id: Scalars['ID'],
  readonly name: Scalars['String'],
  readonly isVillain: Scalars['Boolean'],
  readonly age?: Maybe<Scalars['Int']>,
  readonly height: Scalars['Float'],
  readonly primaryFunction: DroidFunction,
};


export type DroidHeightArgs = {
  unit?: Maybe<LengthUnit>
};

export enum DroidFunction {
  PROTOCOL = 'PROTOCOL',
  ASTROMECH = 'ASTROMECH',
  BATTLE = 'BATTLE',
  OTHER = 'OTHER'
}

export type Human = Character & {
  readonly __typename?: 'Human',
  readonly id: Scalars['ID'],
  readonly name: Scalars['String'],
  readonly isVillain: Scalars['Boolean'],
  readonly age?: Maybe<Scalars['Int']>,
  readonly height: Scalars['Float'],
  readonly homePlanet?: Maybe<Scalars['String']>,
};


export type HumanHeightArgs = {
  unit?: Maybe<LengthUnit>
};

export enum LengthUnit {
  METER = 'METER',
  FOOT = 'FOOT'
}

export type Query = {
  readonly __typename?: 'Query',
  readonly hello: Scalars['String'],
  readonly character?: Maybe<Character>,
  readonly all: ReadonlyArray<Character>,
};


export type QueryHelloArgs = {
  name?: Maybe<Scalars['String']>
};


export type QueryCharacterArgs = {
  id: Scalars['ID']
};
export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>,
  String: ResolverTypeWrapper<Scalars['String']>,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  Character: ResolverTypeWrapper<Character>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  LengthUnit: LengthUnit,
  Float: ResolverTypeWrapper<Scalars['Float']>,
  DroidFunction: DroidFunction,
  Human: ResolverTypeWrapper<Human>,
  Droid: ResolverTypeWrapper<Droid>,
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {},
  String: Scalars['String'],
  ID: Scalars['ID'],
  Character: Character,
  Boolean: Scalars['Boolean'],
  Int: Scalars['Int'],
  LengthUnit: LengthUnit,
  Float: Scalars['Float'],
  DroidFunction: DroidFunction,
  Human: Human,
  Droid: Droid,
}>;

export type CharacterResolvers<ContextType = any, ParentType extends ResolversParentTypes['Character'] = ResolversParentTypes['Character']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Human' | 'Droid', ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  isVillain?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  age?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  height?: Resolver<ResolversTypes['Float'], ParentType, ContextType, RequireFields<CharacterHeightArgs, 'unit'>>,
}>;

export type DroidResolvers<ContextType = any, ParentType extends ResolversParentTypes['Droid'] = ResolversParentTypes['Droid']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  isVillain?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  age?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  height?: Resolver<ResolversTypes['Float'], ParentType, ContextType, RequireFields<DroidHeightArgs, 'unit'>>,
  primaryFunction?: Resolver<ResolversTypes['DroidFunction'], ParentType, ContextType>,
}>;

export type HumanResolvers<ContextType = any, ParentType extends ResolversParentTypes['Human'] = ResolversParentTypes['Human']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  isVillain?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  age?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  height?: Resolver<ResolversTypes['Float'], ParentType, ContextType, RequireFields<HumanHeightArgs, 'unit'>>,
  homePlanet?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  hello?: Resolver<ResolversTypes['String'], ParentType, ContextType, QueryHelloArgs>,
  character?: Resolver<Maybe<ResolversTypes['Character']>, ParentType, ContextType, RequireFields<QueryCharacterArgs, 'id'>>,
  all?: Resolver<ReadonlyArray<ResolversTypes['Character']>, ParentType, ContextType>,
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Character?: CharacterResolvers,
  Droid?: DroidResolvers<ContextType>,
  Human?: HumanResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
