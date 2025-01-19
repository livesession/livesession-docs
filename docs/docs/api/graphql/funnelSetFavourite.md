---
title: Set Funnel Favourite
---
## !!references funnelSetFavourite

### !description

Set a funnel as favourite

### !canonical funnelSetFavourite

### !category graphql

### !type graphql_mutation

### !examples

#### !!groups

##### !description Example request

##### !!examples

###### !codeblock

####### !title undefined

####### !!tabs

```graphql !code graphql
mutation funnelSetFavourite ($input: FunnelSetFavouriteInput) {
    funnelSetFavourite (input: $input)
}
```

### !!definitions

#### !title Arguments

#### !!properties input

!name input

!type FunnelSetFavouriteInput



##### !context

###### !graphqlName input

###### !graphqlTypeShort input

##### !!properties is_favourite

!name is\_favourite

!type Boolean!



###### !context

####### !graphqlBuiltInType true

####### !graphqlName is_favourite

####### !graphqlTypeFlat Boolean

####### !graphqlTypeShort scalar

### !!definitions

#### !title Returns
