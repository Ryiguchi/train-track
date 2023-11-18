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

export type AddExerciseInput = {
  groupId?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
};

export type AddGroupInput = {
  color: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type AddScheduleInput = {
  date: Scalars['String']['input'];
  groupId: Scalars['Int']['input'];
};

export type AddWorkoutInput = {
  date: Scalars['String']['input'];
  exerciseId: Scalars['Int']['input'];
  sets: Array<SetInput>;
};

export type DeletedExercise = {
  __typename?: 'DeletedExercise';
  groupId?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type DeletedWorkout = {
  __typename?: 'DeletedWorkout';
  date: Scalars['String']['output'];
  exerciseId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  sets: Array<Set>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type Exercise = {
  __typename?: 'Exercise';
  group: Group;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type Group = {
  __typename?: 'Group';
  color: Scalars['String']['output'];
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
  addGroup: Group;
  addScheduleDay?: Maybe<Schedule>;
  addWorkout?: Maybe<Workout>;
  deleteExercise?: Maybe<DeletedExercise>;
  deleteGroup: Group;
  deleteWorkout?: Maybe<DeletedWorkout>;
  updateEmail: User;
  updateExercise?: Maybe<Exercise>;
  updateGroup: Group;
  updateName: User;
  updatePassword: User;
  updateScheduleDay?: Maybe<Schedule>;
};


export type MutationAddExerciseArgs = {
  addExerciseData: AddExerciseInput;
  userId: Scalars['Int']['input'];
};


export type MutationAddGroupArgs = {
  addGroupData: AddGroupInput;
  userId: Scalars['Int']['input'];
};


export type MutationAddScheduleDayArgs = {
  addScheduleData: AddScheduleInput;
  userId: Scalars['Int']['input'];
};


export type MutationAddWorkoutArgs = {
  addWorkoutData: AddWorkoutInput;
  userId: Scalars['Int']['input'];
};


export type MutationDeleteExerciseArgs = {
  id: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationDeleteGroupArgs = {
  id: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationDeleteWorkoutArgs = {
  id: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationUpdateEmailArgs = {
  updateEmailData: UpdateEmailInput;
  userId: Scalars['Int']['input'];
};


export type MutationUpdateExerciseArgs = {
  updateExerciseData: UpdateExerciseInput;
  userId: Scalars['Int']['input'];
};


export type MutationUpdateGroupArgs = {
  updateGroupData: UpdateGroupInput;
  userId: Scalars['Int']['input'];
};


export type MutationUpdateNameArgs = {
  name: Scalars['String']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationUpdatePasswordArgs = {
  updatePasswordData: UpdatePasswordInput;
  userId: Scalars['Int']['input'];
};


export type MutationUpdateScheduleDayArgs = {
  updateScheduleData: UpdateScheduleInput;
  userId: Scalars['Int']['input'];
};

export type Query = {
  __typename?: 'Query';
  exercisesByUserId: Array<Exercise>;
  groupsByUserId?: Maybe<Array<Group>>;
  isTodaysGroupSet?: Maybe<Scalars['Boolean']['output']>;
  previousWorkout?: Maybe<Workout>;
  scheduleByUserId?: Maybe<Array<Schedule>>;
  userById: User;
  workoutsByUserId?: Maybe<Array<Workout>>;
};


export type QueryExercisesByUserIdArgs = {
  userId: Scalars['Int']['input'];
};


export type QueryGroupsByUserIdArgs = {
  userId: Scalars['Int']['input'];
};


export type QueryIsTodaysGroupSetArgs = {
  userId: Scalars['Int']['input'];
};


export type QueryPreviousWorkoutArgs = {
  exerciseId: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
};


export type QueryScheduleByUserIdArgs = {
  userId: Scalars['Int']['input'];
};


export type QueryUserByIdArgs = {
  userId: Scalars['Int']['input'];
};


export type QueryWorkoutsByUserIdArgs = {
  userId: Scalars['Int']['input'];
};

export type Schedule = {
  __typename?: 'Schedule';
  date: Scalars['String']['output'];
  group: Group;
  id: Scalars['Int']['output'];
};

export type Set = {
  __typename?: 'Set';
  id: Scalars['String']['output'];
  reps: Scalars['Int']['output'];
  setNum: Scalars['Int']['output'];
  weight: Scalars['Float']['output'];
};

export type SetInput = {
  id: Scalars['String']['input'];
  reps: Scalars['Int']['input'];
  setNum: Scalars['Int']['input'];
  weight: Scalars['Float']['input'];
};

export type UpdateEmailInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type UpdateExerciseInput = {
  groupId?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
};

export type UpdateGroupInput = {
  color: Scalars['String']['input'];
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
};

export type UpdatePasswordInput = {
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};

export type UpdateScheduleInput = {
  groupId: Scalars['Int']['input'];
  id: Scalars['Int']['input'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['String']['output'];
  email?: Maybe<Scalars['String']['output']>;
  googleId?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['String']['output'];
};

export type Workout = {
  __typename?: 'Workout';
  date: Scalars['String']['output'];
  exercise: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  sets: Array<Set>;
  totalReps: Scalars['Int']['output'];
  totalWeight: Scalars['Int']['output'];
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
  AddExerciseInput: AddExerciseInput;
  AddGroupInput: AddGroupInput;
  AddScheduleInput: AddScheduleInput;
  AddWorkoutInput: AddWorkoutInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  DeletedExercise: ResolverTypeWrapper<DeletedExercise>;
  DeletedWorkout: ResolverTypeWrapper<DeletedWorkout>;
  Exercise: ResolverTypeWrapper<Exercise>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  Group: ResolverTypeWrapper<Group>;
  GroupName: ResolverTypeWrapper<GroupName>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Schedule: ResolverTypeWrapper<Schedule>;
  Set: ResolverTypeWrapper<Set>;
  SetInput: SetInput;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  UpdateEmailInput: UpdateEmailInput;
  UpdateExerciseInput: UpdateExerciseInput;
  UpdateGroupInput: UpdateGroupInput;
  UpdatePasswordInput: UpdatePasswordInput;
  UpdateScheduleInput: UpdateScheduleInput;
  User: ResolverTypeWrapper<User>;
  Workout: ResolverTypeWrapper<Workout>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AddExerciseInput: AddExerciseInput;
  AddGroupInput: AddGroupInput;
  AddScheduleInput: AddScheduleInput;
  AddWorkoutInput: AddWorkoutInput;
  Boolean: Scalars['Boolean']['output'];
  DeletedExercise: DeletedExercise;
  DeletedWorkout: DeletedWorkout;
  Exercise: Exercise;
  Float: Scalars['Float']['output'];
  Group: Group;
  GroupName: GroupName;
  Int: Scalars['Int']['output'];
  Mutation: {};
  Query: {};
  Schedule: Schedule;
  Set: Set;
  SetInput: SetInput;
  String: Scalars['String']['output'];
  UpdateEmailInput: UpdateEmailInput;
  UpdateExerciseInput: UpdateExerciseInput;
  UpdateGroupInput: UpdateGroupInput;
  UpdatePasswordInput: UpdatePasswordInput;
  UpdateScheduleInput: UpdateScheduleInput;
  User: User;
  Workout: Workout;
};

export type DeletedExerciseResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeletedExercise'] = ResolversParentTypes['DeletedExercise']> = {
  groupId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeletedWorkoutResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeletedWorkout'] = ResolversParentTypes['DeletedWorkout']> = {
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  exerciseId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  sets?: Resolver<Array<ResolversTypes['Set']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ExerciseResolvers<ContextType = any, ParentType extends ResolversParentTypes['Exercise'] = ResolversParentTypes['Exercise']> = {
  group?: Resolver<ResolversTypes['Group'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GroupResolvers<ContextType = any, ParentType extends ResolversParentTypes['Group'] = ResolversParentTypes['Group']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GroupNameResolvers<ContextType = any, ParentType extends ResolversParentTypes['GroupName'] = ResolversParentTypes['GroupName']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addExercise?: Resolver<Maybe<ResolversTypes['Exercise']>, ParentType, ContextType, RequireFields<MutationAddExerciseArgs, 'addExerciseData' | 'userId'>>;
  addGroup?: Resolver<ResolversTypes['Group'], ParentType, ContextType, RequireFields<MutationAddGroupArgs, 'addGroupData' | 'userId'>>;
  addScheduleDay?: Resolver<Maybe<ResolversTypes['Schedule']>, ParentType, ContextType, RequireFields<MutationAddScheduleDayArgs, 'addScheduleData' | 'userId'>>;
  addWorkout?: Resolver<Maybe<ResolversTypes['Workout']>, ParentType, ContextType, RequireFields<MutationAddWorkoutArgs, 'addWorkoutData' | 'userId'>>;
  deleteExercise?: Resolver<Maybe<ResolversTypes['DeletedExercise']>, ParentType, ContextType, RequireFields<MutationDeleteExerciseArgs, 'id' | 'userId'>>;
  deleteGroup?: Resolver<ResolversTypes['Group'], ParentType, ContextType, RequireFields<MutationDeleteGroupArgs, 'id' | 'userId'>>;
  deleteWorkout?: Resolver<Maybe<ResolversTypes['DeletedWorkout']>, ParentType, ContextType, RequireFields<MutationDeleteWorkoutArgs, 'id' | 'userId'>>;
  updateEmail?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationUpdateEmailArgs, 'updateEmailData' | 'userId'>>;
  updateExercise?: Resolver<Maybe<ResolversTypes['Exercise']>, ParentType, ContextType, RequireFields<MutationUpdateExerciseArgs, 'updateExerciseData' | 'userId'>>;
  updateGroup?: Resolver<ResolversTypes['Group'], ParentType, ContextType, RequireFields<MutationUpdateGroupArgs, 'updateGroupData' | 'userId'>>;
  updateName?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationUpdateNameArgs, 'name' | 'userId'>>;
  updatePassword?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationUpdatePasswordArgs, 'updatePasswordData' | 'userId'>>;
  updateScheduleDay?: Resolver<Maybe<ResolversTypes['Schedule']>, ParentType, ContextType, RequireFields<MutationUpdateScheduleDayArgs, 'updateScheduleData' | 'userId'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  exercisesByUserId?: Resolver<Array<ResolversTypes['Exercise']>, ParentType, ContextType, RequireFields<QueryExercisesByUserIdArgs, 'userId'>>;
  groupsByUserId?: Resolver<Maybe<Array<ResolversTypes['Group']>>, ParentType, ContextType, RequireFields<QueryGroupsByUserIdArgs, 'userId'>>;
  isTodaysGroupSet?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<QueryIsTodaysGroupSetArgs, 'userId'>>;
  previousWorkout?: Resolver<Maybe<ResolversTypes['Workout']>, ParentType, ContextType, RequireFields<QueryPreviousWorkoutArgs, 'exerciseId' | 'userId'>>;
  scheduleByUserId?: Resolver<Maybe<Array<ResolversTypes['Schedule']>>, ParentType, ContextType, RequireFields<QueryScheduleByUserIdArgs, 'userId'>>;
  userById?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<QueryUserByIdArgs, 'userId'>>;
  workoutsByUserId?: Resolver<Maybe<Array<ResolversTypes['Workout']>>, ParentType, ContextType, RequireFields<QueryWorkoutsByUserIdArgs, 'userId'>>;
};

export type ScheduleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Schedule'] = ResolversParentTypes['Schedule']> = {
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  group?: Resolver<ResolversTypes['Group'], ParentType, ContextType>;
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
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  googleId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WorkoutResolvers<ContextType = any, ParentType extends ResolversParentTypes['Workout'] = ResolversParentTypes['Workout']> = {
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  exercise?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  sets?: Resolver<Array<ResolversTypes['Set']>, ParentType, ContextType>;
  totalReps?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalWeight?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  DeletedExercise?: DeletedExerciseResolvers<ContextType>;
  DeletedWorkout?: DeletedWorkoutResolvers<ContextType>;
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

