// THIS IS A GENERATED FILE, use `yarn generate:graphql:ts to regenerate`
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
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

























export type Query = {
  __typename?: 'Query',
  readonly ping: Scalars['String'],
  readonly hello: Scalars['String'],
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
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
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
  Boolean: Scalars['Boolean'],
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

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date'
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime'
}

export interface EmailAddressScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['EmailAddress'], any> {
  name: 'EmailAddress'
}

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

export type QueryResolvers<ContextType = ServerContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  ping?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  hello?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
}>;

export interface RgbScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['RGB'], any> {
  name: 'RGB'
}

export interface RgbaScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['RGBA'], any> {
  name: 'RGBA'
}

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

export type Resolvers<ContextType = ServerContext> = ResolversObject<{
  BigInt?: GraphQLScalarType,
  Date?: GraphQLScalarType,
  DateTime?: GraphQLScalarType,
  EmailAddress?: GraphQLScalarType,
  GUID?: GraphQLScalarType,
  HexColorCode?: GraphQLScalarType,
  HSL?: GraphQLScalarType,
  HSLA?: GraphQLScalarType,
  IPv4?: GraphQLScalarType,
  IPv6?: GraphQLScalarType,
  ISBN?: GraphQLScalarType,
  Long?: GraphQLScalarType,
  MAC?: GraphQLScalarType,
  NegativeFloat?: GraphQLScalarType,
  NegativeInt?: GraphQLScalarType,
  NonNegativeFloat?: GraphQLScalarType,
  NonNegativeInt?: GraphQLScalarType,
  NonPositiveFloat?: GraphQLScalarType,
  NonPositiveInt?: GraphQLScalarType,
  PhoneNumber?: GraphQLScalarType,
  Port?: GraphQLScalarType,
  PositiveFloat?: GraphQLScalarType,
  PositiveInt?: GraphQLScalarType,
  PostalCode?: GraphQLScalarType,
  Query?: QueryResolvers<ContextType>,
  RGB?: GraphQLScalarType,
  RGBA?: GraphQLScalarType,
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
export type IResolvers<ContextType = ServerContext> = Resolvers<ContextType>;
