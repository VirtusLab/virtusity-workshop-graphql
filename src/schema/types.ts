// THIS IS A GENERATED FILE, use `yarn generate:graphql:ts to regenerate`
import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig
} from "graphql";
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: Date;
  DateTime: Date;
  Time: Date;
  EmailAddress: any;
  NegativeFloat: any;
  NegativeInt: any;
  NonNegativeFloat: any;
  NonNegativeInt: any;
  NonPositiveFloat: any;
  NonPositiveInt: any;
  PhoneNumber: any;
  PositiveFloat: any;
  PositiveInt: any;
  PostalCode: any;
  UnsignedFloat: any;
  UnsignedInt: any;
  URL: any;
  BigInt: any;
  Long: any;
  GUID: any;
  HexColorCode: any;
  HSL: any;
  HSLA: any;
  IPv4: any;
  IPv6: any;
  ISBN: any;
  MAC: any;
  Port: any;
  RGB: any;
  RGBA: any;
  USCurrency: any;
};

export type Account = {
  __typename?: "Account";
  readonly iban: Scalars["String"];
  readonly bic: Scalars["String"];
  readonly currency: Currency;
};

export type Address = {
  __typename?: "Address";
  readonly street: Scalars["String"];
  readonly building?: Maybe<Scalars["String"]>;
  readonly flat?: Maybe<Scalars["String"]>;
  readonly postcode: Scalars["String"];
  readonly city: Scalars["String"];
};

export type AgreementSite = Company | Employee;

export type Company = {
  __typename?: "Company";
  readonly name: Scalars["String"];
  readonly address: Address;
  readonly nip: Scalars["String"];
  readonly regon?: Maybe<Scalars["String"]>;
  readonly krs?: Maybe<Scalars["String"]>;
};

export enum Currency {
  PLN = "PLN",
  GBP = "GBP",
  EUR = "EUR",
  USD = "USD"
}

export type Employee = {
  __typename?: "Employee";
  readonly id: Scalars["ID"];
  readonly name: Scalars["String"];
  readonly email: Scalars["String"];
  readonly company?: Maybe<Company>;
};

export enum EmployeeType {
  UOP = "UoP",
  UZ = "UZ",
  UOD = "UoD",
  B2B = "B2B",
  SUBCONTRACT = "subcontract",
  MANAGMENT = "managment"
}

export type LuminisInvoice = {
  __typename?: "LuminisInvoice";
  readonly id: Scalars["ID"];
  readonly products: ReadonlyArray<LuminisProduct>;
  readonly invoiceBuyer: AgreementSite;
  readonly invoiceSeller: Company;
  readonly dateOfSell: Scalars["Date"];
  readonly dateOfInvoice: Scalars["Date"];
  readonly dateOfPayment: Scalars["Date"];
};

export type LuminisProduct = {
  __typename?: "LuminisProduct";
  readonly code: Scalars["ID"];
  readonly name: Scalars["String"];
  readonly comment?: Maybe<Scalars["String"]>;
  readonly netto: Scalars["Int"];
  readonly currency: Currency;
  readonly vat: Scalars["Int"];
  readonly isVB: Scalars["Boolean"];
  readonly isCost: Scalars["Boolean"];
  readonly settlement: Settlement;
};

export type LuminisProductAssignment = {
  __typename?: "LuminisProductAssignment";
  readonly employee: Employee;
  readonly product: LuminisProduct;
  readonly month: Scalars["Int"];
  readonly year: Scalars["Int"];
  readonly comment?: Maybe<Scalars["String"]>;
  readonly invoiceBuyer: AgreementSite;
  readonly paidBy: AgreementSite;
  readonly quantity: Scalars["Int"];
};

export type Query = {
  __typename?: "Query";
  readonly employees: ReadonlyArray<Employee>;
  readonly luminisProducts: ReadonlyArray<Maybe<LuminisProduct>>;
};

export type QueryEmployeesArgs = {
  id?: Maybe<Scalars["ID"]>;
  email?: Maybe<Scalars["String"]>;
};

export enum Settlement {
  HOURLY = "hourly",
  MONTHLY = "monthly"
}

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

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, TParent, TContext, TArgs>;
}

export type SubscriptionResolver<
  TResult,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionResolverObject<TResult, TParent, TContext, TArgs>)
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  ID: ResolverTypeWrapper<Scalars["ID"]>;
  String: ResolverTypeWrapper<Scalars["String"]>;
  Employee: ResolverTypeWrapper<Employee>;
  Company: ResolverTypeWrapper<Company>;
  Address: ResolverTypeWrapper<Address>;
  LuminisProduct: ResolverTypeWrapper<LuminisProduct>;
  Int: ResolverTypeWrapper<Scalars["Int"]>;
  Currency: Currency;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
  Settlement: Settlement;
  EmployeeType: EmployeeType;
  Account: ResolverTypeWrapper<Account>;
  AgreementSite: ResolversTypes["Company"] | ResolversTypes["Employee"];
  LuminisProductAssignment: ResolverTypeWrapper<
    Omit<LuminisProductAssignment, "invoiceBuyer" | "paidBy"> & {
      invoiceBuyer: ResolversTypes["AgreementSite"];
      paidBy: ResolversTypes["AgreementSite"];
    }
  >;
  LuminisInvoice: ResolverTypeWrapper<
    Omit<LuminisInvoice, "invoiceBuyer"> & {
      invoiceBuyer: ResolversTypes["AgreementSite"];
    }
  >;
  Date: ResolverTypeWrapper<Scalars["Date"]>;
  DateTime: ResolverTypeWrapper<Scalars["DateTime"]>;
  Time: ResolverTypeWrapper<Scalars["Time"]>;
  EmailAddress: ResolverTypeWrapper<Scalars["EmailAddress"]>;
  NegativeFloat: ResolverTypeWrapper<Scalars["NegativeFloat"]>;
  NegativeInt: ResolverTypeWrapper<Scalars["NegativeInt"]>;
  NonNegativeFloat: ResolverTypeWrapper<Scalars["NonNegativeFloat"]>;
  NonNegativeInt: ResolverTypeWrapper<Scalars["NonNegativeInt"]>;
  NonPositiveFloat: ResolverTypeWrapper<Scalars["NonPositiveFloat"]>;
  NonPositiveInt: ResolverTypeWrapper<Scalars["NonPositiveInt"]>;
  PhoneNumber: ResolverTypeWrapper<Scalars["PhoneNumber"]>;
  PositiveFloat: ResolverTypeWrapper<Scalars["PositiveFloat"]>;
  PositiveInt: ResolverTypeWrapper<Scalars["PositiveInt"]>;
  PostalCode: ResolverTypeWrapper<Scalars["PostalCode"]>;
  UnsignedFloat: ResolverTypeWrapper<Scalars["UnsignedFloat"]>;
  UnsignedInt: ResolverTypeWrapper<Scalars["UnsignedInt"]>;
  URL: ResolverTypeWrapper<Scalars["URL"]>;
  BigInt: ResolverTypeWrapper<Scalars["BigInt"]>;
  Long: ResolverTypeWrapper<Scalars["Long"]>;
  GUID: ResolverTypeWrapper<Scalars["GUID"]>;
  HexColorCode: ResolverTypeWrapper<Scalars["HexColorCode"]>;
  HSL: ResolverTypeWrapper<Scalars["HSL"]>;
  HSLA: ResolverTypeWrapper<Scalars["HSLA"]>;
  IPv4: ResolverTypeWrapper<Scalars["IPv4"]>;
  IPv6: ResolverTypeWrapper<Scalars["IPv6"]>;
  ISBN: ResolverTypeWrapper<Scalars["ISBN"]>;
  MAC: ResolverTypeWrapper<Scalars["MAC"]>;
  Port: ResolverTypeWrapper<Scalars["Port"]>;
  RGB: ResolverTypeWrapper<Scalars["RGB"]>;
  RGBA: ResolverTypeWrapper<Scalars["RGBA"]>;
  USCurrency: ResolverTypeWrapper<Scalars["USCurrency"]>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  ID: Scalars["ID"];
  String: Scalars["String"];
  Employee: Employee;
  Company: Company;
  Address: Address;
  LuminisProduct: LuminisProduct;
  Int: Scalars["Int"];
  Currency: Currency;
  Boolean: Scalars["Boolean"];
  Settlement: Settlement;
  EmployeeType: EmployeeType;
  Account: Account;
  AgreementSite: ResolversTypes["Company"] | ResolversTypes["Employee"];
  LuminisProductAssignment: Omit<
    LuminisProductAssignment,
    "invoiceBuyer" | "paidBy"
  > & {
    invoiceBuyer: ResolversTypes["AgreementSite"];
    paidBy: ResolversTypes["AgreementSite"];
  };
  LuminisInvoice: Omit<LuminisInvoice, "invoiceBuyer"> & {
    invoiceBuyer: ResolversTypes["AgreementSite"];
  };
  Date: Scalars["Date"];
  DateTime: Scalars["DateTime"];
  Time: Scalars["Time"];
  EmailAddress: Scalars["EmailAddress"];
  NegativeFloat: Scalars["NegativeFloat"];
  NegativeInt: Scalars["NegativeInt"];
  NonNegativeFloat: Scalars["NonNegativeFloat"];
  NonNegativeInt: Scalars["NonNegativeInt"];
  NonPositiveFloat: Scalars["NonPositiveFloat"];
  NonPositiveInt: Scalars["NonPositiveInt"];
  PhoneNumber: Scalars["PhoneNumber"];
  PositiveFloat: Scalars["PositiveFloat"];
  PositiveInt: Scalars["PositiveInt"];
  PostalCode: Scalars["PostalCode"];
  UnsignedFloat: Scalars["UnsignedFloat"];
  UnsignedInt: Scalars["UnsignedInt"];
  URL: Scalars["URL"];
  BigInt: Scalars["BigInt"];
  Long: Scalars["Long"];
  GUID: Scalars["GUID"];
  HexColorCode: Scalars["HexColorCode"];
  HSL: Scalars["HSL"];
  HSLA: Scalars["HSLA"];
  IPv4: Scalars["IPv4"];
  IPv6: Scalars["IPv6"];
  ISBN: Scalars["ISBN"];
  MAC: Scalars["MAC"];
  Port: Scalars["Port"];
  RGB: Scalars["RGB"];
  RGBA: Scalars["RGBA"];
  USCurrency: Scalars["USCurrency"];
}>;

export type AccountResolvers<
  ContextType = ServerContext,
  ParentType extends ResolversParentTypes["Account"] = ResolversParentTypes["Account"]
> = ResolversObject<{
  iban?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  bic?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  currency?: Resolver<ResolversTypes["Currency"], ParentType, ContextType>;
}>;

export type AddressResolvers<
  ContextType = ServerContext,
  ParentType extends ResolversParentTypes["Address"] = ResolversParentTypes["Address"]
> = ResolversObject<{
  street?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  building?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  flat?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  postcode?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  city?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
}>;

export type AgreementSiteResolvers<
  ContextType = ServerContext,
  ParentType extends ResolversParentTypes["AgreementSite"] = ResolversParentTypes["AgreementSite"]
> = ResolversObject<{
  __resolveType: TypeResolveFn<"Company" | "Employee", ParentType, ContextType>;
}>;

export interface BigIntScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["BigInt"], any> {
  name: "BigInt";
}

export type CompanyResolvers<
  ContextType = ServerContext,
  ParentType extends ResolversParentTypes["Company"] = ResolversParentTypes["Company"]
> = ResolversObject<{
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  address?: Resolver<ResolversTypes["Address"], ParentType, ContextType>;
  nip?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  regon?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  krs?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
}>;

export interface DateScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["Date"], any> {
  name: "Date";
}

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["DateTime"], any> {
  name: "DateTime";
}

export interface EmailAddressScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["EmailAddress"], any> {
  name: "EmailAddress";
}

export type EmployeeResolvers<
  ContextType = ServerContext,
  ParentType extends ResolversParentTypes["Employee"] = ResolversParentTypes["Employee"]
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  email?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes["Company"]>, ParentType, ContextType>;
}>;

export interface GuidScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["GUID"], any> {
  name: "GUID";
}

export interface HexColorCodeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["HexColorCode"], any> {
  name: "HexColorCode";
}

export interface HslScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["HSL"], any> {
  name: "HSL";
}

export interface HslaScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["HSLA"], any> {
  name: "HSLA";
}

export interface IPv4ScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["IPv4"], any> {
  name: "IPv4";
}

export interface IPv6ScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["IPv6"], any> {
  name: "IPv6";
}

export interface IsbnScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["ISBN"], any> {
  name: "ISBN";
}

export interface LongScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["Long"], any> {
  name: "Long";
}

export type LuminisInvoiceResolvers<
  ContextType = ServerContext,
  ParentType extends ResolversParentTypes["LuminisInvoice"] = ResolversParentTypes["LuminisInvoice"]
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  products?: Resolver<
    ReadonlyArray<ResolversTypes["LuminisProduct"]>,
    ParentType,
    ContextType
  >;
  invoiceBuyer?: Resolver<
    ResolversTypes["AgreementSite"],
    ParentType,
    ContextType
  >;
  invoiceSeller?: Resolver<ResolversTypes["Company"], ParentType, ContextType>;
  dateOfSell?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  dateOfInvoice?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  dateOfPayment?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
}>;

export type LuminisProductResolvers<
  ContextType = ServerContext,
  ParentType extends ResolversParentTypes["LuminisProduct"] = ResolversParentTypes["LuminisProduct"]
> = ResolversObject<{
  code?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  comment?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  netto?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  currency?: Resolver<ResolversTypes["Currency"], ParentType, ContextType>;
  vat?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  isVB?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  isCost?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  settlement?: Resolver<ResolversTypes["Settlement"], ParentType, ContextType>;
}>;

export type LuminisProductAssignmentResolvers<
  ContextType = ServerContext,
  ParentType extends ResolversParentTypes["LuminisProductAssignment"] = ResolversParentTypes["LuminisProductAssignment"]
> = ResolversObject<{
  employee?: Resolver<ResolversTypes["Employee"], ParentType, ContextType>;
  product?: Resolver<ResolversTypes["LuminisProduct"], ParentType, ContextType>;
  month?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  year?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  comment?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  invoiceBuyer?: Resolver<
    ResolversTypes["AgreementSite"],
    ParentType,
    ContextType
  >;
  paidBy?: Resolver<ResolversTypes["AgreementSite"], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
}>;

export interface MacScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["MAC"], any> {
  name: "MAC";
}

export interface NegativeFloatScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["NegativeFloat"], any> {
  name: "NegativeFloat";
}

export interface NegativeIntScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["NegativeInt"], any> {
  name: "NegativeInt";
}

export interface NonNegativeFloatScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["NonNegativeFloat"], any> {
  name: "NonNegativeFloat";
}

export interface NonNegativeIntScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["NonNegativeInt"], any> {
  name: "NonNegativeInt";
}

export interface NonPositiveFloatScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["NonPositiveFloat"], any> {
  name: "NonPositiveFloat";
}

export interface NonPositiveIntScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["NonPositiveInt"], any> {
  name: "NonPositiveInt";
}

export interface PhoneNumberScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["PhoneNumber"], any> {
  name: "PhoneNumber";
}

export interface PortScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["Port"], any> {
  name: "Port";
}

export interface PositiveFloatScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["PositiveFloat"], any> {
  name: "PositiveFloat";
}

export interface PositiveIntScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["PositiveInt"], any> {
  name: "PositiveInt";
}

export interface PostalCodeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["PostalCode"], any> {
  name: "PostalCode";
}

export type QueryResolvers<
  ContextType = ServerContext,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = ResolversObject<{
  employees?: Resolver<
    ReadonlyArray<ResolversTypes["Employee"]>,
    ParentType,
    ContextType,
    QueryEmployeesArgs
  >;
  luminisProducts?: Resolver<
    ReadonlyArray<Maybe<ResolversTypes["LuminisProduct"]>>,
    ParentType,
    ContextType
  >;
}>;

export interface RgbScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["RGB"], any> {
  name: "RGB";
}

export interface RgbaScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["RGBA"], any> {
  name: "RGBA";
}

export interface TimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["Time"], any> {
  name: "Time";
}

export interface UnsignedFloatScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["UnsignedFloat"], any> {
  name: "UnsignedFloat";
}

export interface UnsignedIntScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["UnsignedInt"], any> {
  name: "UnsignedInt";
}

export interface UrlScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["URL"], any> {
  name: "URL";
}

export interface UsCurrencyScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["USCurrency"], any> {
  name: "USCurrency";
}

export type Resolvers<ContextType = ServerContext> = ResolversObject<{
  Account?: AccountResolvers<ContextType>;
  Address?: AddressResolvers<ContextType>;
  AgreementSite?: AgreementSiteResolvers;
  BigInt?: GraphQLScalarType;
  Company?: CompanyResolvers<ContextType>;
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  EmailAddress?: GraphQLScalarType;
  Employee?: EmployeeResolvers<ContextType>;
  GUID?: GraphQLScalarType;
  HexColorCode?: GraphQLScalarType;
  HSL?: GraphQLScalarType;
  HSLA?: GraphQLScalarType;
  IPv4?: GraphQLScalarType;
  IPv6?: GraphQLScalarType;
  ISBN?: GraphQLScalarType;
  Long?: GraphQLScalarType;
  LuminisInvoice?: LuminisInvoiceResolvers<ContextType>;
  LuminisProduct?: LuminisProductResolvers<ContextType>;
  LuminisProductAssignment?: LuminisProductAssignmentResolvers<ContextType>;
  MAC?: GraphQLScalarType;
  NegativeFloat?: GraphQLScalarType;
  NegativeInt?: GraphQLScalarType;
  NonNegativeFloat?: GraphQLScalarType;
  NonNegativeInt?: GraphQLScalarType;
  NonPositiveFloat?: GraphQLScalarType;
  NonPositiveInt?: GraphQLScalarType;
  PhoneNumber?: GraphQLScalarType;
  Port?: GraphQLScalarType;
  PositiveFloat?: GraphQLScalarType;
  PositiveInt?: GraphQLScalarType;
  PostalCode?: GraphQLScalarType;
  Query?: QueryResolvers<ContextType>;
  RGB?: GraphQLScalarType;
  RGBA?: GraphQLScalarType;
  Time?: GraphQLScalarType;
  UnsignedFloat?: GraphQLScalarType;
  UnsignedInt?: GraphQLScalarType;
  URL?: GraphQLScalarType;
  USCurrency?: GraphQLScalarType;
}>;

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = ServerContext> = Resolvers<ContextType>;
