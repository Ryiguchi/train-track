import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Exercise = {
  __typename?: 'Exercise';
  group: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type ExerciseData = {
  groupId?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
};

export type Group = {
  __typename?: 'Group';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type GroupName = {
  __typename?: 'GroupName';
  name: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addExercise?: Maybe<Exercise>;
};


export type MutationAddExerciseArgs = {
  userData?: InputMaybe<ExerciseData>;
};

export type Query = {
  __typename?: 'Query';
  exercises: Array<Exercise>;
  groups?: Maybe<Array<Maybe<Group>>>;
  schedule: Array<Maybe<Schedule>>;
  workouts?: Maybe<Array<Maybe<Workout>>>;
  workoutsByDate?: Maybe<Array<Maybe<Workout>>>;
  workoutsByExercise?: Maybe<Array<Maybe<Workout>>>;
};


export type QueryWorkoutsByDateArgs = {
  date: Scalars['String']['input'];
};


export type QueryWorkoutsByExerciseArgs = {
  exercise: Scalars['String']['input'];
};

export type Schedule = {
  __typename?: 'Schedule';
  date: Scalars['String']['output'];
  group?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
};

export type Set = {
  __typename?: 'Set';
  id: Scalars['String']['output'];
  reps: Scalars['Int']['output'];
  setNum: Scalars['Int']['output'];
  weight: Scalars['Float']['output'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  exercises: Array<Maybe<Scalars['String']['output']>>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type Workout = {
  __typename?: 'Workout';
  date: Scalars['String']['output'];
  exercise: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  sets: Array<Set>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

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
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Exercise: ResolverTypeWrapper<Exercise>;
  ExerciseData: ExerciseData;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  Group: ResolverTypeWrapper<Group>;
  GroupName: ResolverTypeWrapper<GroupName>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Schedule: ResolverTypeWrapper<Schedule>;
  Set: ResolverTypeWrapper<Set>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  User: ResolverTypeWrapper<User>;
  Workout: ResolverTypeWrapper<Workout>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Exercise: Exercise;
  ExerciseData: ExerciseData;
  Float: Scalars['Float']['output'];
  Group: Group;
  GroupName: GroupName;
  Int: Scalars['Int']['output'];
  Mutation: {};
  Query: {};
  Schedule: Schedule;
  Set: Set;
  String: Scalars['String']['output'];
  User: User;
  Workout: Workout;
};

export type ExerciseResolvers<ContextType = any, ParentType extends ResolversParentTypes['Exercise'] = ResolversParentTypes['Exercise']> = {
  group?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GroupResolvers<ContextType = any, ParentType extends ResolversParentTypes['Group'] = ResolversParentTypes['Group']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GroupNameResolvers<ContextType = any, ParentType extends ResolversParentTypes['GroupName'] = ResolversParentTypes['GroupName']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addExercise?: Resolver<Maybe<ResolversTypes['Exercise']>, ParentType, ContextType, Partial<MutationAddExerciseArgs>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  exercises?: Resolver<Array<ResolversTypes['Exercise']>, ParentType, ContextType>;
  groups?: Resolver<Maybe<Array<Maybe<ResolversTypes['Group']>>>, ParentType, ContextType>;
  schedule?: Resolver<Array<Maybe<ResolversTypes['Schedule']>>, ParentType, ContextType>;
  workouts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Workout']>>>, ParentType, ContextType>;
  workoutsByDate?: Resolver<Maybe<Array<Maybe<ResolversTypes['Workout']>>>, ParentType, ContextType, RequireFields<QueryWorkoutsByDateArgs, 'date'>>;
  workoutsByExercise?: Resolver<Maybe<Array<Maybe<ResolversTypes['Workout']>>>, ParentType, ContextType, RequireFields<QueryWorkoutsByExerciseArgs, 'exercise'>>;
};

export type ScheduleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Schedule'] = ResolversParentTypes['Schedule']> = {
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  group?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SetResolvers<ContextType = any, ParentType extends ResolversParentTypes['Set'] = ResolversParentTypes['Set']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  reps?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  setNum?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  weight?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  exercises?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WorkoutResolvers<ContextType = any, ParentType extends ResolversParentTypes['Workout'] = ResolversParentTypes['Workout']> = {
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  exercise?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  sets?: Resolver<Array<ResolversTypes['Set']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Exercise?: ExerciseResolvers<ContextType>;
  Group?: GroupResolvers<ContextType>;
  GroupName?: GroupNameResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Schedule?: ScheduleResolvers<ContextType>;
  Set?: SetResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  Workout?: WorkoutResolvers<ContextType>;
};

