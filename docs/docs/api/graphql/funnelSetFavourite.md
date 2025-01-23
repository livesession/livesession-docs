---
title: Set Funnel Favourite
---
## !description

Set a funnel as favourite

## !!references funnelSetFavourite

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



##### !!properties is_favourite

!name is\_favourite

!type Boolean!



### !!definitions

#### !title Returns
