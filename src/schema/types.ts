/* eslint-disable */
// THIS IS A GENERATED FILE, use `yarn generate:graphql:ts to regenerate`
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  Date: Date,
  DateTime: Date,
  Time: Date,
  EmailAddress: any,
  NegativeFloat: any,
  NegativeInt: any,
  NonNegativeFloat: any,
  NonNegativeInt: any,
  NonPositiveFloat: any,
  NonPositiveInt: any,
  PhoneNumber: any,
  PositiveFloat: any,
  PositiveInt: any,
  PostalCode: any,
  UnsignedFloat: any,
  UnsignedInt: any,
  URL: any,
  BigInt: any,
  Long: any,
  GUID: any,
  HexColorCode: any,
  HSL: any,
  HSLA: any,
  IPv4: any,
  IPv6: any,
  ISBN: any,
  MAC: any,
  Port: any,
  RGB: any,
  RGBA: any,
  USCurrency: any,
};


export type Character = {
  readonly id: Scalars['ID'],
  readonly name: Scalars['String'],
  readonly friends: ReadonlyArray<Character>,
  readonly friendsConnection: FriendsConnection,
  readonly appearsIn: ReadonlyArray<Episode>,
};


export type CharacterFriendsConnectionArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['ID']>
};



export type Droid = Character & {
  readonly __typename?: 'Droid',
  readonly id: Scalars['ID'],
  readonly name: Scalars['String'],
  readonly friends: ReadonlyArray<Character>,
  readonly friendsConnection: FriendsConnection,
  readonly appearsIn: ReadonlyArray<Episode>,
  readonly primaryFunction?: Maybe<Scalars['String']>,
};


export type DroidFriendsConnectionArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['ID']>
};


export enum Episode {
  NEWHOPE = 'NEWHOPE',
  EMPIRE = 'EMPIRE',
  JEDI = 'JEDI'
}

export type FriendsConnection = {
  readonly __typename?: 'FriendsConnection',
  readonly totalCount?: Maybe<Scalars['Int']>,
  readonly edges: ReadonlyArray<FriendsEdge>,
  readonly friends: ReadonlyArray<Character>,
  readonly pageInfo: PageInfo,
};

export type FriendsEdge = {
  readonly __typename?: 'FriendsEdge',
  readonly cursor: Scalars['ID'],
  readonly node?: Maybe<Character>,
};





export type Human = Character & {
  readonly __typename?: 'Human',
  readonly id: Scalars['ID'],
  readonly name: Scalars['String'],
  readonly homePlanet?: Maybe<Scalars['String']>,
  readonly height?: Maybe<Scalars['Float']>,
  readonly mass?: Maybe<Scalars['Float']>,
  readonly friends: ReadonlyArray<Character>,
  readonly friendsConnection: FriendsConnection,
  readonly appearsIn: ReadonlyArray<Episode>,
  readonly starships: ReadonlyArray<Starship>,
};


export type HumanHeightArgs = {
  unit?: Maybe<LengthUnit>
};


export type HumanFriendsConnectionArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['ID']>
};




export enum LengthUnit {
  METER = 'METER',
  FOOT = 'FOOT'
}



export type Mutation = {
  readonly __typename?: 'Mutation',
  readonly createReview?: Maybe<Review>,
};


export type MutationCreateReviewArgs = {
  episode: Episode,
  review: ReviewInput
};







export type PageInfo = {
  readonly __typename?: 'PageInfo',
  readonly startCursor?: Maybe<Scalars['ID']>,
  readonly endCursor?: Maybe<Scalars['ID']>,
  readonly hasNextPage: Scalars['Boolean'],
};






export type Query = {
  readonly __typename?: 'Query',
  readonly ping: Scalars['String'],
  readonly hello: Scalars['String'],
  readonly hero?: Maybe<Character>,
  readonly reviews: ReadonlyArray<Review>,
  readonly search: ReadonlyArray<SearchResult>,
  readonly character?: Maybe<Character>,
  readonly droid?: Maybe<Droid>,
  readonly human?: Maybe<Human>,
  readonly starship?: Maybe<Starship>,
};


export type QueryHelloArgs = {
  name?: Maybe<Scalars['String']>
};


export type QueryHeroArgs = {
  episode?: Maybe<Episode>
};


export type QueryReviewsArgs = {
  episode: Episode
};


export type QuerySearchArgs = {
  text?: Maybe<Scalars['String']>
};


export type QueryCharacterArgs = {
  id: Scalars['ID']
};


export type QueryDroidArgs = {
  id: Scalars['ID']
};


export type QueryHumanArgs = {
  id: Scalars['ID']
};


export type QueryStarshipArgs = {
  id: Scalars['ID']
};

export type Review = {
  readonly __typename?: 'Review',
  readonly episode?: Maybe<Episode>,
  readonly stars: Scalars['Int'],
  readonly commentary?: Maybe<Scalars['String']>,
};

export type ReviewInput = {
  readonly stars: Scalars['Int'],
  readonly commentary?: Maybe<Scalars['String']>,
};



export type SearchResult = Human | Droid | Starship;

export type Starship = {
  readonly __typename?: 'Starship',
  readonly id: Scalars['ID'],
  readonly name: Scalars['String'],
  readonly length?: Maybe<Scalars['Float']>,
  readonly coordinates?: Maybe<ReadonlyArray<ReadonlyArray<Scalars['Float']>>>,
};


export type StarshipLengthArgs = {
  unit?: Maybe<LengthUnit>
};

export type Subscription = {
  readonly __typename?: 'Subscription',
  readonly reviewAdded?: Maybe<Review>,
};


export type SubscriptionReviewAddedArgs = {
  episode?: Maybe<Episode>
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
  Episode: Episode,
  Character: ResolverTypeWrapper<Character>,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  FriendsConnection: ResolverTypeWrapper<FriendsConnection>,
  FriendsEdge: ResolverTypeWrapper<FriendsEdge>,
  PageInfo: ResolverTypeWrapper<PageInfo>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  Review: ResolverTypeWrapper<Review>,
  SearchResult: ResolversTypes['Human'] | ResolversTypes['Droid'] | ResolversTypes['Starship'],
  Human: ResolverTypeWrapper<Human>,
  LengthUnit: LengthUnit,
  Float: ResolverTypeWrapper<Scalars['Float']>,
  Starship: ResolverTypeWrapper<Starship>,
  Droid: ResolverTypeWrapper<Droid>,
  Mutation: ResolverTypeWrapper<{}>,
  ReviewInput: ReviewInput,
  Subscription: ResolverTypeWrapper<{}>,
  Date: ResolverTypeWrapper<Scalars['Date']>,
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>,
  Time: ResolverTypeWrapper<Scalars['Time']>,
  EmailAddress: ResolverTypeWrapper<Scalars['EmailAddress']>,
  NegativeFloat: ResolverTypeWrapper<Scalars['NegativeFloat']>,
  NegativeInt: ResolverTypeWrapper<Scalars['NegativeInt']>,
  NonNegativeFloat: ResolverTypeWrapper<Scalars['NonNegativeFloat']>,
  NonNegativeInt: ResolverTypeWrapper<Scalars['NonNegativeInt']>,
  NonPositiveFloat: ResolverTypeWrapper<Scalars['NonPositiveFloat']>,
  NonPositiveInt: ResolverTypeWrapper<Scalars['NonPositiveInt']>,
  PhoneNumber: ResolverTypeWrapper<Scalars['PhoneNumber']>,
  PositiveFloat: ResolverTypeWrapper<Scalars['PositiveFloat']>,
  PositiveInt: ResolverTypeWrapper<Scalars['PositiveInt']>,
  PostalCode: ResolverTypeWrapper<Scalars['PostalCode']>,
  UnsignedFloat: ResolverTypeWrapper<Scalars['UnsignedFloat']>,
  UnsignedInt: ResolverTypeWrapper<Scalars['UnsignedInt']>,
  URL: ResolverTypeWrapper<Scalars['URL']>,
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>,
  Long: ResolverTypeWrapper<Scalars['Long']>,
  GUID: ResolverTypeWrapper<Scalars['GUID']>,
  HexColorCode: ResolverTypeWrapper<Scalars['HexColorCode']>,
  HSL: ResolverTypeWrapper<Scalars['HSL']>,
  HSLA: ResolverTypeWrapper<Scalars['HSLA']>,
  IPv4: ResolverTypeWrapper<Scalars['IPv4']>,
  IPv6: ResolverTypeWrapper<Scalars['IPv6']>,
  ISBN: ResolverTypeWrapper<Scalars['ISBN']>,
  MAC: ResolverTypeWrapper<Scalars['MAC']>,
  Port: ResolverTypeWrapper<Scalars['Port']>,
  RGB: ResolverTypeWrapper<Scalars['RGB']>,
  RGBA: ResolverTypeWrapper<Scalars['RGBA']>,
  USCurrency: ResolverTypeWrapper<Scalars['USCurrency']>,
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {},
  String: Scalars['String'],
  Episode: Episode,
  Character: Character,
  ID: Scalars['ID'],
  Int: Scalars['Int'],
  FriendsConnection: FriendsConnection,
  FriendsEdge: FriendsEdge,
  PageInfo: PageInfo,
  Boolean: Scalars['Boolean'],
  Review: Review,
  SearchResult: ResolversTypes['Human'] | ResolversTypes['Droid'] | ResolversTypes['Starship'],
  Human: Human,
  LengthUnit: LengthUnit,
  Float: Scalars['Float'],
  Starship: Starship,
  Droid: Droid,
  Mutation: {},
  ReviewInput: ReviewInput,
  Subscription: {},
  Date: Scalars['Date'],
  DateTime: Scalars['DateTime'],
  Time: Scalars['Time'],
  EmailAddress: Scalars['EmailAddress'],
  NegativeFloat: Scalars['NegativeFloat'],
  NegativeInt: Scalars['NegativeInt'],
  NonNegativeFloat: Scalars['NonNegativeFloat'],
  NonNegativeInt: Scalars['NonNegativeInt'],
  NonPositiveFloat: Scalars['NonPositiveFloat'],
  NonPositiveInt: Scalars['NonPositiveInt'],
  PhoneNumber: Scalars['PhoneNumber'],
  PositiveFloat: Scalars['PositiveFloat'],
  PositiveInt: Scalars['PositiveInt'],
  PostalCode: Scalars['PostalCode'],
  UnsignedFloat: Scalars['UnsignedFloat'],
  UnsignedInt: Scalars['UnsignedInt'],
  URL: Scalars['URL'],
  BigInt: Scalars['BigInt'],
  Long: Scalars['Long'],
  GUID: Scalars['GUID'],
  HexColorCode: Scalars['HexColorCode'],
  HSL: Scalars['HSL'],
  HSLA: Scalars['HSLA'],
  IPv4: Scalars['IPv4'],
  IPv6: Scalars['IPv6'],
  ISBN: Scalars['ISBN'],
  MAC: Scalars['MAC'],
  Port: Scalars['Port'],
  RGB: Scalars['RGB'],
  RGBA: Scalars['RGBA'],
  USCurrency: Scalars['USCurrency'],
}>;

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt'
}

export type CharacterResolvers<ContextType = any, ParentType extends ResolversParentTypes['Character'] = ResolversParentTypes['Character']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Human' | 'Droid', ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  friends?: Resolver<ReadonlyArray<ResolversTypes['Character']>, ParentType, ContextType>,
  friendsConnection?: Resolver<ResolversTypes['FriendsConnection'], ParentType, ContextType, CharacterFriendsConnectionArgs>,
  appearsIn?: Resolver<ReadonlyArray<ResolversTypes['Episode']>, ParentType, ContextType>,
}>;

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date'
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime'
}

export type DroidResolvers<ContextType = any, ParentType extends ResolversParentTypes['Droid'] = ResolversParentTypes['Droid']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  friends?: Resolver<ReadonlyArray<ResolversTypes['Character']>, ParentType, ContextType>,
  friendsConnection?: Resolver<ResolversTypes['FriendsConnection'], ParentType, ContextType, DroidFriendsConnectionArgs>,
  appearsIn?: Resolver<ReadonlyArray<ResolversTypes['Episode']>, ParentType, ContextType>,
  primaryFunction?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
}>;

export interface EmailAddressScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['EmailAddress'], any> {
  name: 'EmailAddress'
}

export type FriendsConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['FriendsConnection'] = ResolversParentTypes['FriendsConnection']> = ResolversObject<{
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  edges?: Resolver<ReadonlyArray<ResolversTypes['FriendsEdge']>, ParentType, ContextType>,
  friends?: Resolver<ReadonlyArray<ResolversTypes['Character']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
}>;

export type FriendsEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['FriendsEdge'] = ResolversParentTypes['FriendsEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  node?: Resolver<Maybe<ResolversTypes['Character']>, ParentType, ContextType>,
}>;

export interface GuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['GUID'], any> {
  name: 'GUID'
}

export interface HexColorCodeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['HexColorCode'], any> {
  name: 'HexColorCode'
}

export interface HslScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['HSL'], any> {
  name: 'HSL'
}

export interface HslaScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['HSLA'], any> {
  name: 'HSLA'
}

export type HumanResolvers<ContextType = any, ParentType extends ResolversParentTypes['Human'] = ResolversParentTypes['Human']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  homePlanet?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  height?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<HumanHeightArgs, 'unit'>>,
  mass?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  friends?: Resolver<ReadonlyArray<ResolversTypes['Character']>, ParentType, ContextType>,
  friendsConnection?: Resolver<ResolversTypes['FriendsConnection'], ParentType, ContextType, HumanFriendsConnectionArgs>,
  appearsIn?: Resolver<ReadonlyArray<ResolversTypes['Episode']>, ParentType, ContextType>,
  starships?: Resolver<ReadonlyArray<ResolversTypes['Starship']>, ParentType, ContextType>,
}>;

export interface IPv4ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['IPv4'], any> {
  name: 'IPv4'
}

export interface IPv6ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['IPv6'], any> {
  name: 'IPv6'
}

export interface IsbnScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ISBN'], any> {
  name: 'ISBN'
}

export interface LongScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Long'], any> {
  name: 'Long'
}

export interface MacScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['MAC'], any> {
  name: 'MAC'
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createReview?: Resolver<Maybe<ResolversTypes['Review']>, ParentType, ContextType, RequireFields<MutationCreateReviewArgs, 'episode' | 'review'>>,
}>;

export interface NegativeFloatScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NegativeFloat'], any> {
  name: 'NegativeFloat'
}

export interface NegativeIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NegativeInt'], any> {
  name: 'NegativeInt'
}

export interface NonNegativeFloatScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NonNegativeFloat'], any> {
  name: 'NonNegativeFloat'
}

export interface NonNegativeIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NonNegativeInt'], any> {
  name: 'NonNegativeInt'
}

export interface NonPositiveFloatScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NonPositiveFloat'], any> {
  name: 'NonPositiveFloat'
}

export interface NonPositiveIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NonPositiveInt'], any> {
  name: 'NonPositiveInt'
}

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = ResolversObject<{
  startCursor?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  endCursor?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
}>;

export interface PhoneNumberScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['PhoneNumber'], any> {
  name: 'PhoneNumber'
}

export interface PortScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Port'], any> {
  name: 'Port'
}

export interface PositiveFloatScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['PositiveFloat'], any> {
  name: 'PositiveFloat'
}

export interface PositiveIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['PositiveInt'], any> {
  name: 'PositiveInt'
}

export interface PostalCodeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['PostalCode'], any> {
  name: 'PostalCode'
}

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  ping?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  hello?: Resolver<ResolversTypes['String'], ParentType, ContextType, QueryHelloArgs>,
  hero?: Resolver<Maybe<ResolversTypes['Character']>, ParentType, ContextType, QueryHeroArgs>,
  reviews?: Resolver<ReadonlyArray<ResolversTypes['Review']>, ParentType, ContextType, RequireFields<QueryReviewsArgs, 'episode'>>,
  search?: Resolver<ReadonlyArray<ResolversTypes['SearchResult']>, ParentType, ContextType, QuerySearchArgs>,
  character?: Resolver<Maybe<ResolversTypes['Character']>, ParentType, ContextType, RequireFields<QueryCharacterArgs, 'id'>>,
  droid?: Resolver<Maybe<ResolversTypes['Droid']>, ParentType, ContextType, RequireFields<QueryDroidArgs, 'id'>>,
  human?: Resolver<Maybe<ResolversTypes['Human']>, ParentType, ContextType, RequireFields<QueryHumanArgs, 'id'>>,
  starship?: Resolver<Maybe<ResolversTypes['Starship']>, ParentType, ContextType, RequireFields<QueryStarshipArgs, 'id'>>,
}>;

export type ReviewResolvers<ContextType = any, ParentType extends ResolversParentTypes['Review'] = ResolversParentTypes['Review']> = ResolversObject<{
  episode?: Resolver<Maybe<ResolversTypes['Episode']>, ParentType, ContextType>,
  stars?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  commentary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
}>;

export interface RgbScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['RGB'], any> {
  name: 'RGB'
}

export interface RgbaScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['RGBA'], any> {
  name: 'RGBA'
}

export type SearchResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['SearchResult'] = ResolversParentTypes['SearchResult']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Human' | 'Droid' | 'Starship', ParentType, ContextType>
}>;

export type StarshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['Starship'] = ResolversParentTypes['Starship']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  length?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<StarshipLengthArgs, 'unit'>>,
  coordinates?: Resolver<Maybe<ReadonlyArray<ReadonlyArray<ResolversTypes['Float']>>>, ParentType, ContextType>,
}>;

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  reviewAdded?: SubscriptionResolver<Maybe<ResolversTypes['Review']>, "reviewAdded", ParentType, ContextType, SubscriptionReviewAddedArgs>,
}>;

export interface TimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Time'], any> {
  name: 'Time'
}

export interface UnsignedFloatScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UnsignedFloat'], any> {
  name: 'UnsignedFloat'
}

export interface UnsignedIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UnsignedInt'], any> {
  name: 'UnsignedInt'
}

export interface UrlScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['URL'], any> {
  name: 'URL'
}

export interface UsCurrencyScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['USCurrency'], any> {
  name: 'USCurrency'
}

export type Resolvers<ContextType = any> = ResolversObject<{
  BigInt?: GraphQLScalarType,
  Character?: CharacterResolvers,
  Date?: GraphQLScalarType,
  DateTime?: GraphQLScalarType,
  Droid?: DroidResolvers<ContextType>,
  EmailAddress?: GraphQLScalarType,
  FriendsConnection?: FriendsConnectionResolvers<ContextType>,
  FriendsEdge?: FriendsEdgeResolvers<ContextType>,
  GUID?: GraphQLScalarType,
  HexColorCode?: GraphQLScalarType,
  HSL?: GraphQLScalarType,
  HSLA?: GraphQLScalarType,
  Human?: HumanResolvers<ContextType>,
  IPv4?: GraphQLScalarType,
  IPv6?: GraphQLScalarType,
  ISBN?: GraphQLScalarType,
  Long?: GraphQLScalarType,
  MAC?: GraphQLScalarType,
  Mutation?: MutationResolvers<ContextType>,
  NegativeFloat?: GraphQLScalarType,
  NegativeInt?: GraphQLScalarType,
  NonNegativeFloat?: GraphQLScalarType,
  NonNegativeInt?: GraphQLScalarType,
  NonPositiveFloat?: GraphQLScalarType,
  NonPositiveInt?: GraphQLScalarType,
  PageInfo?: PageInfoResolvers<ContextType>,
  PhoneNumber?: GraphQLScalarType,
  Port?: GraphQLScalarType,
  PositiveFloat?: GraphQLScalarType,
  PositiveInt?: GraphQLScalarType,
  PostalCode?: GraphQLScalarType,
  Query?: QueryResolvers<ContextType>,
  Review?: ReviewResolvers<ContextType>,
  RGB?: GraphQLScalarType,
  RGBA?: GraphQLScalarType,
  SearchResult?: SearchResultResolvers,
  Starship?: StarshipResolvers<ContextType>,
  Subscription?: SubscriptionResolvers<ContextType>,
  Time?: GraphQLScalarType,
  UnsignedFloat?: GraphQLScalarType,
  UnsignedInt?: GraphQLScalarType,
  URL?: GraphQLScalarType,
  USCurrency?: GraphQLScalarType,
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
