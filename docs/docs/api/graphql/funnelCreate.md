---
title: Create Funnel
---
## !!references funnelCreate

### !description

Create a new funnel

### !canonical funnelCreate

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
mutation funnelCreate ($input: FunnelInput) {
    funnelCreate (input: $input) {
        funnel_id
        created_by_agent_id
        created_by_login
        website_id
        name
        description
        segment_id
        compute {
            date_range {
                from
                to
            }
            steps {
                name
                filters {
                    must {
                        name
                        unit
                        group
                        data {
                            string {
                                value
                                values
                                operator
                            }
                            int {
                                value
                                values
                                operator
                            }
                            bool {
                                value
                                operator
                            }
                            event {
                                type
                                group {
                                    value
                                    values
                                    operator
                                }
                                element {
                                    value
                                    values
                                    operator
                                }
                                txt {
                                    value
                                    values
                                    operator
                                }
                                element_path {
                                    value
                                    values
                                    operator
                                }
                                location {
                                    value
                                    values
                                    operator
                                }
                                value {
                                    value
                                    values
                                    operator
                                }
                                height {
                                    value
                                    values
                                    operator
                                }
                                width {
                                    value
                                    values
                                    operator
                                }
                                timestamp {
                                    value
                                    values
                                    operator
                                }
                                x {
                                    value
                                    values
                                    operator
                                }
                                y {
                                    value
                                    values
                                    operator
                                }
                            }
                            param {
                                name
                                value {
                                    value
                                    values
                                    operator
                                }
                            }
                            event_properties {
                                name
                                value_str {
                                    value
                                    values
                                    operator
                                }
                                value_bool {
                                    value
                                    operator
                                }
                                value_int {
                                    value
                                    values
                                    operator
                                }
                                value_float {
                                    value
                                    values
                                    operator
                                }
                            }
                        }
                        defined_event_id
                        stable_id
                        parent_filter_stable_id
                    }
                    should {
                        name
                        unit
                        group
                        data {
                            string {
                                value
                                values
                                operator
                            }
                            int {
                                value
                                values
                                operator
                            }
                            bool {
                                value
                                operator
                            }
                            event {
                                type
                                group {
                                    value
                                    values
                                    operator
                                }
                                element {
                                    value
                                    values
                                    operator
                                }
                                txt {
                                    value
                                    values
                                    operator
                                }
                                element_path {
                                    value
                                    values
                                    operator
                                }
                                location {
                                    value
                                    values
                                    operator
                                }
                                value {
                                    value
                                    values
                                    operator
                                }
                                height {
                                    value
                                    values
                                    operator
                                }
                                width {
                                    value
                                    values
                                    operator
                                }
                                timestamp {
                                    value
                                    values
                                    operator
                                }
                                x {
                                    value
                                    values
                                    operator
                                }
                                y {
                                    value
                                    values
                                    operator
                                }
                            }
                            param {
                                name
                                value {
                                    value
                                    values
                                    operator
                                }
                            }
                            event_properties {
                                name
                                value_str {
                                    value
                                    values
                                    operator
                                }
                                value_bool {
                                    value
                                    operator
                                }
                                value_int {
                                    value
                                    values
                                    operator
                                }
                                value_float {
                                    value
                                    values
                                    operator
                                }
                            }
                        }
                        defined_event_id
                        stable_id
                        parent_filter_stable_id
                    }
                    must_not {
                        name
                        unit
                        group
                        data {
                            string {
                                value
                                values
                                operator
                            }
                            int {
                                value
                                values
                                operator
                            }
                            bool {
                                value
                                operator
                            }
                            event {
                                type
                                group {
                                    value
                                    values
                                    operator
                                }
                                element {
                                    value
                                    values
                                    operator
                                }
                                txt {
                                    value
                                    values
                                    operator
                                }
                                element_path {
                                    value
                                    values
                                    operator
                                }
                                location {
                                    value
                                    values
                                    operator
                                }
                                value {
                                    value
                                    values
                                    operator
                                }
                                height {
                                    value
                                    values
                                    operator
                                }
                                width {
                                    value
                                    values
                                    operator
                                }
                                timestamp {
                                    value
                                    values
                                    operator
                                }
                                x {
                                    value
                                    values
                                    operator
                                }
                                y {
                                    value
                                    values
                                    operator
                                }
                            }
                            param {
                                name
                                value {
                                    value
                                    values
                                    operator
                                }
                            }
                            event_properties {
                                name
                                value_str {
                                    value
                                    values
                                    operator
                                }
                                value_bool {
                                    value
                                    operator
                                }
                                value_int {
                                    value
                                    values
                                    operator
                                }
                                value_float {
                                    value
                                    values
                                    operator
                                }
                            }
                        }
                        defined_event_id
                        stable_id
                        parent_filter_stable_id
                    }
                }
            }
            conversion_value {
                property_name
                value_type
                label
            }
            type
            filters {
                must {
                    name
                    unit
                    group
                    data {
                        string {
                            value
                            values
                            operator
                        }
                        int {
                            value
                            values
                            operator
                        }
                        bool {
                            value
                            operator
                        }
                        event {
                            type
                            group {
                                value
                                values
                                operator
                            }
                            element {
                                value
                                values
                                operator
                            }
                            txt {
                                value
                                values
                                operator
                            }
                            element_path {
                                value
                                values
                                operator
                            }
                            location {
                                value
                                values
                                operator
                            }
                            value {
                                value
                                values
                                operator
                            }
                            height {
                                value
                                values
                                operator
                            }
                            width {
                                value
                                values
                                operator
                            }
                            timestamp {
                                value
                                values
                                operator
                            }
                            x {
                                value
                                values
                                operator
                            }
                            y {
                                value
                                values
                                operator
                            }
                        }
                        param {
                            name
                            value {
                                value
                                values
                                operator
                            }
                        }
                        event_properties {
                            name
                            value_str {
                                value
                                values
                                operator
                            }
                            value_bool {
                                value
                                operator
                            }
                            value_int {
                                value
                                values
                                operator
                            }
                            value_float {
                                value
                                values
                                operator
                            }
                        }
                    }
                    defined_event_id
                    stable_id
                    parent_filter_stable_id
                }
                should {
                    name
                    unit
                    group
                    data {
                        string {
                            value
                            values
                            operator
                        }
                        int {
                            value
                            values
                            operator
                        }
                        bool {
                            value
                            operator
                        }
                        event {
                            type
                            group {
                                value
                                values
                                operator
                            }
                            element {
                                value
                                values
                                operator
                            }
                            txt {
                                value
                                values
                                operator
                            }
                            element_path {
                                value
                                values
                                operator
                            }
                            location {
                                value
                                values
                                operator
                            }
                            value {
                                value
                                values
                                operator
                            }
                            height {
                                value
                                values
                                operator
                            }
                            width {
                                value
                                values
                                operator
                            }
                            timestamp {
                                value
                                values
                                operator
                            }
                            x {
                                value
                                values
                                operator
                            }
                            y {
                                value
                                values
                                operator
                            }
                        }
                        param {
                            name
                            value {
                                value
                                values
                                operator
                            }
                        }
                        event_properties {
                            name
                            value_str {
                                value
                                values
                                operator
                            }
                            value_bool {
                                value
                                operator
                            }
                            value_int {
                                value
                                values
                                operator
                            }
                            value_float {
                                value
                                values
                                operator
                            }
                        }
                    }
                    defined_event_id
                    stable_id
                    parent_filter_stable_id
                }
                must_not {
                    name
                    unit
                    group
                    data {
                        string {
                            value
                            values
                            operator
                        }
                        int {
                            value
                            values
                            operator
                        }
                        bool {
                            value
                            operator
                        }
                        event {
                            type
                            group {
                                value
                                values
                                operator
                            }
                            element {
                                value
                                values
                                operator
                            }
                            txt {
                                value
                                values
                                operator
                            }
                            element_path {
                                value
                                values
                                operator
                            }
                            location {
                                value
                                values
                                operator
                            }
                            value {
                                value
                                values
                                operator
                            }
                            height {
                                value
                                values
                                operator
                            }
                            width {
                                value
                                values
                                operator
                            }
                            timestamp {
                                value
                                values
                                operator
                            }
                            x {
                                value
                                values
                                operator
                            }
                            y {
                                value
                                values
                                operator
                            }
                        }
                        param {
                            name
                            value {
                                value
                                values
                                operator
                            }
                        }
                        event_properties {
                            name
                            value_str {
                                value
                                values
                                operator
                            }
                            value_bool {
                                value
                                operator
                            }
                            value_int {
                                value
                                values
                                operator
                            }
                            value_float {
                                value
                                values
                                operator
                            }
                        }
                    }
                    defined_event_id
                    stable_id
                    parent_filter_stable_id
                }
            }
        }
        is_favourite
        is_owner
        is_public
    }
}
```

### !!definitions

#### !title Arguments

#### !!properties input

!name input

!type FunnelInput



##### !context

###### !graphqlName input

###### !graphqlTypeShort input

##### !!properties name

!name name

!type String!

Name of the funnel

###### !context

####### !graphqlBuiltInType true

####### !graphqlName name

####### !graphqlTypeFlat String

####### !graphqlTypeShort scalar

##### !!properties description

!name description

!type String



###### !context

####### !graphqlBuiltInType true

####### !graphqlName description

####### !graphqlTypeFlat String

####### !graphqlTypeShort scalar

##### !!properties website_id

!name website\_id

!type ID



###### !context

####### !graphqlBuiltInType true

####### !graphqlName website_id

####### !graphqlTypeFlat ID

####### !graphqlTypeShort scalar

##### !!properties segment_id

!name segment\_id

!type String!



###### !context

####### !graphqlBuiltInType true

####### !graphqlName segment_id

####### !graphqlTypeFlat String

####### !graphqlTypeShort scalar

##### !!properties compute

!name compute

!type FunnelComputeWriteInput!



###### !context

####### !graphqlBuiltInType false

####### !graphqlName compute

####### !graphqlTypeFlat FunnelComputeWriteInput

####### !graphqlTypeShort input

###### !!properties type

!name type

!type String



####### !context

######## !graphqlBuiltInType true

######## !graphqlName type

######## !graphqlTypeFlat String

######## !graphqlTypeShort scalar

###### !!properties date_range

!name date\_range

!type DateRangeInput!



####### !context

######## !graphqlBuiltInType false

######## !graphqlName date_range

######## !graphqlTypeFlat DateRangeInput

######## !graphqlTypeShort input

####### !!properties from

!name from

!type RelativeDate



######## !context

######### !graphqlBuiltInType false

######### !graphqlName from

######### !graphqlTypeFlat RelativeDate

######### !graphqlTypeShort scalar

####### !!properties to

!name to

!type RelativeDate



######## !context

######### !graphqlBuiltInType false

######### !graphqlName to

######### !graphqlTypeFlat RelativeDate

######### !graphqlTypeShort scalar

###### !!properties steps

!name steps

!type \[FunnelStepInput]!



####### !context

######## !graphqlBuiltInType false

######## !graphqlName steps

######## !graphqlTypeFlat FunnelStepInput

######## !graphqlTypeShort input

####### !!properties name

!name name

!type String



######## !context

######### !graphqlBuiltInType true

######### !graphqlName name

######### !graphqlTypeFlat String

######### !graphqlTypeShort scalar

####### !!properties filters

!name filters

!type FiltersInput



######## !context

######### !graphqlBuiltInType false

######### !graphqlName filters

######### !graphqlTypeFlat FiltersInput

######### !graphqlTypeShort input

######## !!properties must

!name must

!type \[FilterInput]



######### !context

########## !graphqlBuiltInType false

########## !graphqlName must

########## !graphqlTypeFlat FilterInput

########## !graphqlTypeShort input

######### !!properties name

!name name

!type String!



########## !context

########### !graphqlBuiltInType true

########### !graphqlName name

########### !graphqlTypeFlat String

########### !graphqlTypeShort scalar

######### !!properties unit

!name unit

!type String



########## !context

########### !graphqlBuiltInType true

########### !graphqlName unit

########### !graphqlTypeFlat String

########### !graphqlTypeShort scalar

######### !!properties group

!name group

!type String



########## !context

########### !graphqlBuiltInType true

########### !graphqlName group

########### !graphqlTypeFlat String

########### !graphqlTypeShort scalar

######### !!properties data

!name data

!type FilterDataInput!



########## !context

########### !graphqlBuiltInType false

########### !graphqlName data

########### !graphqlTypeFlat FilterDataInput

########### !graphqlTypeShort input

########## !!properties string

!name string

!type FilterDataStringInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName string

############ !graphqlTypeFlat FilterDataStringInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties int

!name int

!type FilterDataIntInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName int

############ !graphqlTypeFlat FilterDataIntInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type Int



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[Int!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties bool

!name bool

!type FilterDataBoolInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName bool

############ !graphqlTypeFlat FilterDataBoolInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type Boolean!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Boolean

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties event

!name event

!type FilterDataEventInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName event

############ !graphqlTypeFlat FilterDataEventInput

############ !graphqlTypeShort input

########### !!properties type

!name type

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName type

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties group

!name group

!type FilterDataStringInput



############ !context

############# !graphqlBuiltInType false

############# !graphqlName group

############# !graphqlTypeFlat FilterDataStringInput

############# !graphqlTypeShort input

############ !!properties value

!name value

!type String



############# !context

############## !graphqlBuiltInType true

############## !graphqlName value

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

############ !!properties values

!name values

!type \[String!]



############# !context

############## !graphqlBuiltInType true

############## !graphqlName values

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

############ !!properties operator

!name operator

!type String!



############# !context

############## !graphqlBuiltInType true

############## !graphqlName operator

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

########### !!properties element

!name element

!type FilterDataStringInput



############ !context

############# !graphqlBuiltInType false

############# !graphqlName element

############# !graphqlTypeFlat FilterDataStringInput

############# !graphqlTypeShort input

############ !!properties value

!name value

!type String



############# !context

############## !graphqlBuiltInType true

############## !graphqlName value

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

############ !!properties values

!name values

!type \[String!]



############# !context

############## !graphqlBuiltInType true

############## !graphqlName values

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

############ !!properties operator

!name operator

!type String!



############# !context

############## !graphqlBuiltInType true

############## !graphqlName operator

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

########### !!properties txt

!name txt

!type FilterDataStringInput



############ !context

############# !graphqlBuiltInType false

############# !graphqlName txt

############# !graphqlTypeFlat FilterDataStringInput

############# !graphqlTypeShort input

############ !!properties value

!name value

!type String



############# !context

############## !graphqlBuiltInType true

############## !graphqlName value

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

############ !!properties values

!name values

!type \[String!]



############# !context

############## !graphqlBuiltInType true

############## !graphqlName values

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

############ !!properties operator

!name operator

!type String!



############# !context

############## !graphqlBuiltInType true

############## !graphqlName operator

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

########### !!properties element_path

!name element\_path

!type FilterDataStringInput



############ !context

############# !graphqlBuiltInType false

############# !graphqlName element_path

############# !graphqlTypeFlat FilterDataStringInput

############# !graphqlTypeShort input

############ !!properties value

!name value

!type String



############# !context

############## !graphqlBuiltInType true

############## !graphqlName value

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

############ !!properties values

!name values

!type \[String!]



############# !context

############## !graphqlBuiltInType true

############## !graphqlName values

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

############ !!properties operator

!name operator

!type String!



############# !context

############## !graphqlBuiltInType true

############## !graphqlName operator

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

########### !!properties location

!name location

!type FilterDataStringInput



############ !context

############# !graphqlBuiltInType false

############# !graphqlName location

############# !graphqlTypeFlat FilterDataStringInput

############# !graphqlTypeShort input

############ !!properties value

!name value

!type String



############# !context

############## !graphqlBuiltInType true

############## !graphqlName value

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

############ !!properties values

!name values

!type \[String!]



############# !context

############## !graphqlBuiltInType true

############## !graphqlName values

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

############ !!properties operator

!name operator

!type String!



############# !context

############## !graphqlBuiltInType true

############## !graphqlName operator

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

########### !!properties value

!name value

!type FilterDataStringInput



############ !context

############# !graphqlBuiltInType false

############# !graphqlName value

############# !graphqlTypeFlat FilterDataStringInput

############# !graphqlTypeShort input

############ !!properties value

!name value

!type String



############# !context

############## !graphqlBuiltInType true

############## !graphqlName value

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

############ !!properties values

!name values

!type \[String!]



############# !context

############## !graphqlBuiltInType true

############## !graphqlName values

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

############ !!properties operator

!name operator

!type String!



############# !context

############## !graphqlBuiltInType true

############## !graphqlName operator

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

########### !!properties height

!name height

!type FilterDataIntInput



############ !context

############# !graphqlBuiltInType false

############# !graphqlName height

############# !graphqlTypeFlat FilterDataIntInput

############# !graphqlTypeShort input

############ !!properties value

!name value

!type Int



############# !context

############## !graphqlBuiltInType true

############## !graphqlName value

############## !graphqlTypeFlat Int

############## !graphqlTypeShort scalar

############ !!properties values

!name values

!type \[Int!]



############# !context

############## !graphqlBuiltInType true

############## !graphqlName values

############## !graphqlTypeFlat Int

############## !graphqlTypeShort scalar

############ !!properties operator

!name operator

!type String!



############# !context

############## !graphqlBuiltInType true

############## !graphqlName operator

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

########### !!properties width

!name width

!type FilterDataIntInput



############ !context

############# !graphqlBuiltInType false

############# !graphqlName width

############# !graphqlTypeFlat FilterDataIntInput

############# !graphqlTypeShort input

############ !!properties value

!name value

!type Int



############# !context

############## !graphqlBuiltInType true

############## !graphqlName value

############## !graphqlTypeFlat Int

############## !graphqlTypeShort scalar

############ !!properties values

!name values

!type \[Int!]



############# !context

############## !graphqlBuiltInType true

############## !graphqlName values

############## !graphqlTypeFlat Int

############## !graphqlTypeShort scalar

############ !!properties operator

!name operator

!type String!



############# !context

############## !graphqlBuiltInType true

############## !graphqlName operator

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

########### !!properties timestamp

!name timestamp

!type FilterDataIntInput



############ !context

############# !graphqlBuiltInType false

############# !graphqlName timestamp

############# !graphqlTypeFlat FilterDataIntInput

############# !graphqlTypeShort input

############ !!properties value

!name value

!type Int



############# !context

############## !graphqlBuiltInType true

############## !graphqlName value

############## !graphqlTypeFlat Int

############## !graphqlTypeShort scalar

############ !!properties values

!name values

!type \[Int!]



############# !context

############## !graphqlBuiltInType true

############## !graphqlName values

############## !graphqlTypeFlat Int

############## !graphqlTypeShort scalar

############ !!properties operator

!name operator

!type String!



############# !context

############## !graphqlBuiltInType true

############## !graphqlName operator

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

########### !!properties x

!name x

!type FilterDataIntInput



############ !context

############# !graphqlBuiltInType false

############# !graphqlName x

############# !graphqlTypeFlat FilterDataIntInput

############# !graphqlTypeShort input

############ !!properties value

!name value

!type Int



############# !context

############## !graphqlBuiltInType true

############## !graphqlName value

############## !graphqlTypeFlat Int

############## !graphqlTypeShort scalar

############ !!properties values

!name values

!type \[Int!]



############# !context

############## !graphqlBuiltInType true

############## !graphqlName values

############## !graphqlTypeFlat Int

############## !graphqlTypeShort scalar

############ !!properties operator

!name operator

!type String!



############# !context

############## !graphqlBuiltInType true

############## !graphqlName operator

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

########### !!properties y

!name y

!type FilterDataIntInput



############ !context

############# !graphqlBuiltInType false

############# !graphqlName y

############# !graphqlTypeFlat FilterDataIntInput

############# !graphqlTypeShort input

############ !!properties value

!name value

!type Int



############# !context

############## !graphqlBuiltInType true

############## !graphqlName value

############## !graphqlTypeFlat Int

############## !graphqlTypeShort scalar

############ !!properties values

!name values

!type \[Int!]



############# !context

############## !graphqlBuiltInType true

############## !graphqlName values

############## !graphqlTypeFlat Int

############## !graphqlTypeShort scalar

############ !!properties operator

!name operator

!type String!



############# !context

############## !graphqlBuiltInType true

############## !graphqlName operator

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

########## !!properties param

!name param

!type FilterDataParamInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName param

############ !graphqlTypeFlat FilterDataParamInput

############ !graphqlTypeShort input

########### !!properties name

!name name

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName name

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties value

!name value

!type FilterDataStringInput



############ !context

############# !graphqlBuiltInType false

############# !graphqlName value

############# !graphqlTypeFlat FilterDataStringInput

############# !graphqlTypeShort input

############ !!properties value

!name value

!type String



############# !context

############## !graphqlBuiltInType true

############## !graphqlName value

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

############ !!properties values

!name values

!type \[String!]



############# !context

############## !graphqlBuiltInType true

############## !graphqlName values

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

############ !!properties operator

!name operator

!type String!



############# !context

############## !graphqlBuiltInType true

############## !graphqlName operator

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

########## !!properties event_properties

!name event\_properties

!type \[FilterDataCustomEventPropertyInput]



########### !context

############ !graphqlBuiltInType false

############ !graphqlName event_properties

############ !graphqlTypeFlat FilterDataCustomEventPropertyInput

############ !graphqlTypeShort input

########### !!properties name

!name name

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName name

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties value_str

!name value\_str

!type FilterDataStringInput



############ !context

############# !graphqlBuiltInType false

############# !graphqlName value_str

############# !graphqlTypeFlat FilterDataStringInput

############# !graphqlTypeShort input

############ !!properties value

!name value

!type String



############# !context

############## !graphqlBuiltInType true

############## !graphqlName value

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

############ !!properties values

!name values

!type \[String!]



############# !context

############## !graphqlBuiltInType true

############## !graphqlName values

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

############ !!properties operator

!name operator

!type String!



############# !context

############## !graphqlBuiltInType true

############## !graphqlName operator

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

########### !!properties value_int

!name value\_int

!type FilterDataIntInput



############ !context

############# !graphqlBuiltInType false

############# !graphqlName value_int

############# !graphqlTypeFlat FilterDataIntInput

############# !graphqlTypeShort input

############ !!properties value

!name value

!type Int



############# !context

############## !graphqlBuiltInType true

############## !graphqlName value

############## !graphqlTypeFlat Int

############## !graphqlTypeShort scalar

############ !!properties values

!name values

!type \[Int!]



############# !context

############## !graphqlBuiltInType true

############## !graphqlName values

############## !graphqlTypeFlat Int

############## !graphqlTypeShort scalar

############ !!properties operator

!name operator

!type String!



############# !context

############## !graphqlBuiltInType true

############## !graphqlName operator

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

########### !!properties value_bool

!name value\_bool

!type FilterDataBoolInput



############ !context

############# !graphqlBuiltInType false

############# !graphqlName value_bool

############# !graphqlTypeFlat FilterDataBoolInput

############# !graphqlTypeShort input

############ !!properties value

!name value

!type Boolean!



############# !context

############## !graphqlBuiltInType true

############## !graphqlName value

############## !graphqlTypeFlat Boolean

############## !graphqlTypeShort scalar

############ !!properties operator

!name operator

!type String!



############# !context

############## !graphqlBuiltInType true

############## !graphqlName operator

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

########### !!properties value_float

!name value\_float

!type FilterDataFloatInput



############ !context

############# !graphqlBuiltInType false

############# !graphqlName value_float

############# !graphqlTypeFlat FilterDataFloatInput

############# !graphqlTypeShort input

############ !!properties values

!name values

!type \[Float]



############# !context

############## !graphqlBuiltInType true

############## !graphqlName values

############## !graphqlTypeFlat Float

############## !graphqlTypeShort scalar

############ !!properties value

!name value

!type Float



############# !context

############## !graphqlBuiltInType true

############## !graphqlName value

############## !graphqlTypeFlat Float

############## !graphqlTypeShort scalar

############ !!properties operator

!name operator

!type String!



############# !context

############## !graphqlBuiltInType true

############## !graphqlName operator

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

######### !!properties defined_event_id

!name defined\_event\_id

!type String



########## !context

########### !graphqlBuiltInType true

########### !graphqlName defined_event_id

########### !graphqlTypeFlat String

########### !graphqlTypeShort scalar

######### !!properties stable_id

!name stable\_id

!type String



########## !context

########### !graphqlBuiltInType true

########### !graphqlName stable_id

########### !graphqlTypeFlat String

########### !graphqlTypeShort scalar

######### !!properties parent_filter_stable_id

!name parent\_filter\_stable\_id

!type String



########## !context

########### !graphqlBuiltInType true

########### !graphqlName parent_filter_stable_id

########### !graphqlTypeFlat String

########### !graphqlTypeShort scalar

######## !!properties should

!name should

!type \[FilterInput]



######### !context

########## !graphqlBuiltInType false

########## !graphqlName should

########## !graphqlTypeFlat FilterInput

########## !graphqlTypeShort input

######### !!properties name

!name name

!type String!



########## !context

########### !graphqlBuiltInType true

########### !graphqlName name

########### !graphqlTypeFlat String

########### !graphqlTypeShort scalar

######### !!properties unit

!name unit

!type String



########## !context

########### !graphqlBuiltInType true

########### !graphqlName unit

########### !graphqlTypeFlat String

########### !graphqlTypeShort scalar

######### !!properties group

!name group

!type String



########## !context

########### !graphqlBuiltInType true

########### !graphqlName group

########### !graphqlTypeFlat String

########### !graphqlTypeShort scalar

######### !!properties data

!name data

!type FilterDataInput!



########## !context

########### !graphqlBuiltInType false

########### !graphqlName data

########### !graphqlTypeFlat FilterDataInput

########### !graphqlTypeShort input

########## !!properties string

!name string

!type FilterDataStringInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName string

############ !graphqlTypeFlat FilterDataStringInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties int

!name int

!type FilterDataIntInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName int

############ !graphqlTypeFlat FilterDataIntInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type Int



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[Int!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties bool

!name bool

!type FilterDataBoolInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName bool

############ !graphqlTypeFlat FilterDataBoolInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type Boolean!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Boolean

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties event

!name event

!type FilterDataEventInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName event

############ !graphqlTypeFlat FilterDataEventInput

############ !graphqlTypeShort input

########### !!properties type

!name type

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName type

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties group

!name group

!type FilterDataStringInput



############ !context

############# !graphqlBuiltInType false

############# !graphqlName group

############# !graphqlTypeFlat FilterDataStringInput

############# !graphqlTypeShort input

############ !!properties value

!name value

!type String



############# !context

############## !graphqlBuiltInType true

############## !graphqlName value

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

############ !!properties values

!name values

!type \[String!]



############# !context

############## !graphqlBuiltInType true

############## !graphqlName values

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

############ !!properties operator

!name operator

!type String!



############# !context

############## !graphqlBuiltInType true

############## !graphqlName operator

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

########### !!properties element

!name element

!type FilterDataStringInput



############ !context

############# !graphqlBuiltInType false

############# !graphqlName element

############# !graphqlTypeFlat FilterDataStringInput

############# !graphqlTypeShort input

############ !!properties value

!name value

!type String



############# !context

############## !graphqlBuiltInType true

############## !graphqlName value

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

############ !!properties values

!name values

!type \[String!]



############# !context

############## !graphqlBuiltInType true

############## !graphqlName values

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

############ !!properties operator

!name operator

!type String!



############# !context

############## !graphqlBuiltInType true

############## !graphqlName operator

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

########### !!properties txt

!name txt

!type FilterDataStringInput



############ !context

############# !graphqlBuiltInType false

############# !graphqlName txt

############# !graphqlTypeFlat FilterDataStringInput

############# !graphqlTypeShort input

############ !!properties value

!name value

!type String



############# !context

############## !graphqlBuiltInType true

############## !graphqlName value

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

############ !!properties values

!name values

!type \[String!]



############# !context

############## !graphqlBuiltInType true

############## !graphqlName values

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

############ !!properties operator

!name operator

!type String!



############# !context

############## !graphqlBuiltInType true

############## !graphqlName operator

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

########### !!properties element_path

!name element\_path

!type FilterDataStringInput



############ !context

############# !graphqlBuiltInType false

############# !graphqlName element_path

############# !graphqlTypeFlat FilterDataStringInput

############# !graphqlTypeShort input

############ !!properties value

!name value

!type String



############# !context

############## !graphqlBuiltInType true

############## !graphqlName value

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

############ !!properties values

!name values

!type \[String!]



############# !context

############## !graphqlBuiltInType true

############## !graphqlName values

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

############ !!properties operator

!name operator

!type String!



############# !context

############## !graphqlBuiltInType true

############## !graphqlName operator

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

########### !!properties location

!name location

!type FilterDataStringInput



############ !context

############# !graphqlBuiltInType false

############# !graphqlName location

############# !graphqlTypeFlat FilterDataStringInput

############# !graphqlTypeShort input

############ !!properties value

!name value

!type String



############# !context

############## !graphqlBuiltInType true

############## !graphqlName value

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

############ !!properties values

!name values

!type \[String!]



############# !context

############## !graphqlBuiltInType true

############## !graphqlName values

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

############ !!properties operator

!name operator

!type String!



############# !context

############## !graphqlBuiltInType true

############## !graphqlName operator

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

########### !!properties value

!name value

!type FilterDataStringInput



############ !context

############# !graphqlBuiltInType false

############# !graphqlName value

############# !graphqlTypeFlat FilterDataStringInput

############# !graphqlTypeShort input

############ !!properties value

!name value

!type String



############# !context

############## !graphqlBuiltInType true

############## !graphqlName value

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

############ !!properties values

!name values

!type \[String!]



############# !context

############## !graphqlBuiltInType true

############## !graphqlName values

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

############ !!properties operator

!name operator

!type String!



############# !context

############## !graphqlBuiltInType true

############## !graphqlName operator

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

########### !!properties height

!name height

!type FilterDataIntInput



############ !context

############# !graphqlBuiltInType false

############# !graphqlName height

############# !graphqlTypeFlat FilterDataIntInput

############# !graphqlTypeShort input

############ !!properties value

!name value

!type Int



############# !context

############## !graphqlBuiltInType true

############## !graphqlName value

############## !graphqlTypeFlat Int

############## !graphqlTypeShort scalar

############ !!properties values

!name values

!type \[Int!]



############# !context

############## !graphqlBuiltInType true

############## !graphqlName values

############## !graphqlTypeFlat Int

############## !graphqlTypeShort scalar

############ !!properties operator

!name operator

!type String!



############# !context

############## !graphqlBuiltInType true

############## !graphqlName operator

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

########### !!properties width

!name width

!type FilterDataIntInput



############ !context

############# !graphqlBuiltInType false

############# !graphqlName width

############# !graphqlTypeFlat FilterDataIntInput

############# !graphqlTypeShort input

############ !!properties value

!name value

!type Int



############# !context

############## !graphqlBuiltInType true

############## !graphqlName value

############## !graphqlTypeFlat Int

############## !graphqlTypeShort scalar

############ !!properties values

!name values

!type \[Int!]



############# !context

############## !graphqlBuiltInType true

############## !graphqlName values

############## !graphqlTypeFlat Int

############## !graphqlTypeShort scalar

############ !!properties operator

!name operator

!type String!



############# !context

############## !graphqlBuiltInType true

############## !graphqlName operator

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

########### !!properties timestamp

!name timestamp

!type FilterDataIntInput



############ !context

############# !graphqlBuiltInType false

############# !graphqlName timestamp

############# !graphqlTypeFlat FilterDataIntInput

############# !graphqlTypeShort input

############ !!properties value

!name value

!type Int



############# !context

############## !graphqlBuiltInType true

############## !graphqlName value

############## !graphqlTypeFlat Int

############## !graphqlTypeShort scalar

############ !!properties values

!name values

!type \[Int!]



############# !context

############## !graphqlBuiltInType true

############## !graphqlName values

############## !graphqlTypeFlat Int

############## !graphqlTypeShort scalar

############ !!properties operator

!name operator

!type String!



############# !context

############## !graphqlBuiltInType true

############## !graphqlName operator

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

########### !!properties x

!name x

!type FilterDataIntInput



############ !context

############# !graphqlBuiltInType false

############# !graphqlName x

############# !graphqlTypeFlat FilterDataIntInput

############# !graphqlTypeShort input

############ !!properties value

!name value

!type Int



############# !context

############## !graphqlBuiltInType true

############## !graphqlName value

############## !graphqlTypeFlat Int

############## !graphqlTypeShort scalar

############ !!properties values

!name values

!type \[Int!]



############# !context

############## !graphqlBuiltInType true

############## !graphqlName values

############## !graphqlTypeFlat Int

############## !graphqlTypeShort scalar

############ !!properties operator

!name operator

!type String!



############# !context

############## !graphqlBuiltInType true

############## !graphqlName operator

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

########### !!properties y

!name y

!type FilterDataIntInput



############ !context

############# !graphqlBuiltInType false

############# !graphqlName y

############# !graphqlTypeFlat FilterDataIntInput

############# !graphqlTypeShort input

############ !!properties value

!name value

!type Int



############# !context

############## !graphqlBuiltInType true

############## !graphqlName value

############## !graphqlTypeFlat Int

############## !graphqlTypeShort scalar

############ !!properties values

!name values

!type \[Int!]



############# !context

############## !graphqlBuiltInType true

############## !graphqlName values

############## !graphqlTypeFlat Int

############## !graphqlTypeShort scalar

############ !!properties operator

!name operator

!type String!



############# !context

############## !graphqlBuiltInType true

############## !graphqlName operator

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

########## !!properties param

!name param

!type FilterDataParamInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName param

############ !graphqlTypeFlat FilterDataParamInput

############ !graphqlTypeShort input

########### !!properties name

!name name

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName name

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties value

!name value

!type FilterDataStringInput



############ !context

############# !graphqlBuiltInType false

############# !graphqlName value

############# !graphqlTypeFlat FilterDataStringInput

############# !graphqlTypeShort input

############ !!properties value

!name value

!type String



############# !context

############## !graphqlBuiltInType true

############## !graphqlName value

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

############ !!properties values

!name values

!type \[String!]



############# !context

############## !graphqlBuiltInType true

############## !graphqlName values

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

############ !!properties operator

!name operator

!type String!



############# !context

############## !graphqlBuiltInType true

############## !graphqlName operator

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

########## !!properties event_properties

!name event\_properties

!type \[FilterDataCustomEventPropertyInput]



########### !context

############ !graphqlBuiltInType false

############ !graphqlName event_properties

############ !graphqlTypeFlat FilterDataCustomEventPropertyInput

############ !graphqlTypeShort input

########### !!properties name

!name name

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName name

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties value_str

!name value\_str

!type FilterDataStringInput



############ !context

############# !graphqlBuiltInType false

############# !graphqlName value_str

############# !graphqlTypeFlat FilterDataStringInput

############# !graphqlTypeShort input

############ !!properties value

!name value

!type String



############# !context

############## !graphqlBuiltInType true

############## !graphqlName value

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

############ !!properties values

!name values

!type \[String!]



############# !context

############## !graphqlBuiltInType true

############## !graphqlName values

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

############ !!properties operator

!name operator

!type String!



############# !context

############## !graphqlBuiltInType true

############## !graphqlName operator

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

########### !!properties value_int

!name value\_int

!type FilterDataIntInput



############ !context

############# !graphqlBuiltInType false

############# !graphqlName value_int

############# !graphqlTypeFlat FilterDataIntInput

############# !graphqlTypeShort input

############ !!properties value

!name value

!type Int



############# !context

############## !graphqlBuiltInType true

############## !graphqlName value

############## !graphqlTypeFlat Int

############## !graphqlTypeShort scalar

############ !!properties values

!name values

!type \[Int!]



############# !context

############## !graphqlBuiltInType true

############## !graphqlName values

############## !graphqlTypeFlat Int

############## !graphqlTypeShort scalar

############ !!properties operator

!name operator

!type String!



############# !context

############## !graphqlBuiltInType true

############## !graphqlName operator

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

########### !!properties value_bool

!name value\_bool

!type FilterDataBoolInput



############ !context

############# !graphqlBuiltInType false

############# !graphqlName value_bool

############# !graphqlTypeFlat FilterDataBoolInput

############# !graphqlTypeShort input

############ !!properties value

!name value

!type Boolean!



############# !context

############## !graphqlBuiltInType true

############## !graphqlName value

############## !graphqlTypeFlat Boolean

############## !graphqlTypeShort scalar

############ !!properties operator

!name operator

!type String!



############# !context

############## !graphqlBuiltInType true

############## !graphqlName operator

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

########### !!properties value_float

!name value\_float

!type FilterDataFloatInput



############ !context

############# !graphqlBuiltInType false

############# !graphqlName value_float

############# !graphqlTypeFlat FilterDataFloatInput

############# !graphqlTypeShort input

############ !!properties values

!name values

!type \[Float]



############# !context

############## !graphqlBuiltInType true

############## !graphqlName values

############## !graphqlTypeFlat Float

############## !graphqlTypeShort scalar

############ !!properties value

!name value

!type Float



############# !context

############## !graphqlBuiltInType true

############## !graphqlName value

############## !graphqlTypeFlat Float

############## !graphqlTypeShort scalar

############ !!properties operator

!name operator

!type String!



############# !context

############## !graphqlBuiltInType true

############## !graphqlName operator

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

######### !!properties defined_event_id

!name defined\_event\_id

!type String



########## !context

########### !graphqlBuiltInType true

########### !graphqlName defined_event_id

########### !graphqlTypeFlat String

########### !graphqlTypeShort scalar

######### !!properties stable_id

!name stable\_id

!type String



########## !context

########### !graphqlBuiltInType true

########### !graphqlName stable_id

########### !graphqlTypeFlat String

########### !graphqlTypeShort scalar

######### !!properties parent_filter_stable_id

!name parent\_filter\_stable\_id

!type String



########## !context

########### !graphqlBuiltInType true

########### !graphqlName parent_filter_stable_id

########### !graphqlTypeFlat String

########### !graphqlTypeShort scalar

######## !!properties must_not

!name must\_not

!type \[FilterInput]



######### !context

########## !graphqlBuiltInType false

########## !graphqlName must_not

########## !graphqlTypeFlat FilterInput

########## !graphqlTypeShort input

######### !!properties name

!name name

!type String!



########## !context

########### !graphqlBuiltInType true

########### !graphqlName name

########### !graphqlTypeFlat String

########### !graphqlTypeShort scalar

######### !!properties unit

!name unit

!type String



########## !context

########### !graphqlBuiltInType true

########### !graphqlName unit

########### !graphqlTypeFlat String

########### !graphqlTypeShort scalar

######### !!properties group

!name group

!type String



########## !context

########### !graphqlBuiltInType true

########### !graphqlName group

########### !graphqlTypeFlat String

########### !graphqlTypeShort scalar

######### !!properties data

!name data

!type FilterDataInput!



########## !context

########### !graphqlBuiltInType false

########### !graphqlName data

########### !graphqlTypeFlat FilterDataInput

########### !graphqlTypeShort input

########## !!properties string

!name string

!type FilterDataStringInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName string

############ !graphqlTypeFlat FilterDataStringInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties int

!name int

!type FilterDataIntInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName int

############ !graphqlTypeFlat FilterDataIntInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type Int



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[Int!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties bool

!name bool

!type FilterDataBoolInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName bool

############ !graphqlTypeFlat FilterDataBoolInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type Boolean!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Boolean

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties event

!name event

!type FilterDataEventInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName event

############ !graphqlTypeFlat FilterDataEventInput

############ !graphqlTypeShort input

########### !!properties type

!name type

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName type

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties group

!name group

!type FilterDataStringInput



############ !context

############# !graphqlBuiltInType false

############# !graphqlName group

############# !graphqlTypeFlat FilterDataStringInput

############# !graphqlTypeShort input

############ !!properties value

!name value

!type String



############# !context

############## !graphqlBuiltInType true

############## !graphqlName value

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

############ !!properties values

!name values

!type \[String!]



############# !context

############## !graphqlBuiltInType true

############## !graphqlName values

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

############ !!properties operator

!name operator

!type String!



############# !context

############## !graphqlBuiltInType true

############## !graphqlName operator

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

########### !!properties element

!name element

!type FilterDataStringInput



############ !context

############# !graphqlBuiltInType false

############# !graphqlName element

############# !graphqlTypeFlat FilterDataStringInput

############# !graphqlTypeShort input

############ !!properties value

!name value

!type String



############# !context

############## !graphqlBuiltInType true

############## !graphqlName value

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

############ !!properties values

!name values

!type \[String!]



############# !context

############## !graphqlBuiltInType true

############## !graphqlName values

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

############ !!properties operator

!name operator

!type String!



############# !context

############## !graphqlBuiltInType true

############## !graphqlName operator

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

########### !!properties txt

!name txt

!type FilterDataStringInput



############ !context

############# !graphqlBuiltInType false

############# !graphqlName txt

############# !graphqlTypeFlat FilterDataStringInput

############# !graphqlTypeShort input

############ !!properties value

!name value

!type String



############# !context

############## !graphqlBuiltInType true

############## !graphqlName value

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

############ !!properties values

!name values

!type \[String!]



############# !context

############## !graphqlBuiltInType true

############## !graphqlName values

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

############ !!properties operator

!name operator

!type String!



############# !context

############## !graphqlBuiltInType true

############## !graphqlName operator

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

########### !!properties element_path

!name element\_path

!type FilterDataStringInput



############ !context

############# !graphqlBuiltInType false

############# !graphqlName element_path

############# !graphqlTypeFlat FilterDataStringInput

############# !graphqlTypeShort input

############ !!properties value

!name value

!type String



############# !context

############## !graphqlBuiltInType true

############## !graphqlName value

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

############ !!properties values

!name values

!type \[String!]



############# !context

############## !graphqlBuiltInType true

############## !graphqlName values

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

############ !!properties operator

!name operator

!type String!



############# !context

############## !graphqlBuiltInType true

############## !graphqlName operator

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

########### !!properties location

!name location

!type FilterDataStringInput



############ !context

############# !graphqlBuiltInType false

############# !graphqlName location

############# !graphqlTypeFlat FilterDataStringInput

############# !graphqlTypeShort input

############ !!properties value

!name value

!type String



############# !context

############## !graphqlBuiltInType true

############## !graphqlName value

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

############ !!properties values

!name values

!type \[String!]



############# !context

############## !graphqlBuiltInType true

############## !graphqlName values

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

############ !!properties operator

!name operator

!type String!



############# !context

############## !graphqlBuiltInType true

############## !graphqlName operator

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

########### !!properties value

!name value

!type FilterDataStringInput



############ !context

############# !graphqlBuiltInType false

############# !graphqlName value

############# !graphqlTypeFlat FilterDataStringInput

############# !graphqlTypeShort input

############ !!properties value

!name value

!type String



############# !context

############## !graphqlBuiltInType true

############## !graphqlName value

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

############ !!properties values

!name values

!type \[String!]



############# !context

############## !graphqlBuiltInType true

############## !graphqlName values

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

############ !!properties operator

!name operator

!type String!



############# !context

############## !graphqlBuiltInType true

############## !graphqlName operator

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

########### !!properties height

!name height

!type FilterDataIntInput



############ !context

############# !graphqlBuiltInType false

############# !graphqlName height

############# !graphqlTypeFlat FilterDataIntInput

############# !graphqlTypeShort input

############ !!properties value

!name value

!type Int



############# !context

############## !graphqlBuiltInType true

############## !graphqlName value

############## !graphqlTypeFlat Int

############## !graphqlTypeShort scalar

############ !!properties values

!name values

!type \[Int!]



############# !context

############## !graphqlBuiltInType true

############## !graphqlName values

############## !graphqlTypeFlat Int

############## !graphqlTypeShort scalar

############ !!properties operator

!name operator

!type String!



############# !context

############## !graphqlBuiltInType true

############## !graphqlName operator

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

########### !!properties width

!name width

!type FilterDataIntInput



############ !context

############# !graphqlBuiltInType false

############# !graphqlName width

############# !graphqlTypeFlat FilterDataIntInput

############# !graphqlTypeShort input

############ !!properties value

!name value

!type Int



############# !context

############## !graphqlBuiltInType true

############## !graphqlName value

############## !graphqlTypeFlat Int

############## !graphqlTypeShort scalar

############ !!properties values

!name values

!type \[Int!]



############# !context

############## !graphqlBuiltInType true

############## !graphqlName values

############## !graphqlTypeFlat Int

############## !graphqlTypeShort scalar

############ !!properties operator

!name operator

!type String!



############# !context

############## !graphqlBuiltInType true

############## !graphqlName operator

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

########### !!properties timestamp

!name timestamp

!type FilterDataIntInput



############ !context

############# !graphqlBuiltInType false

############# !graphqlName timestamp

############# !graphqlTypeFlat FilterDataIntInput

############# !graphqlTypeShort input

############ !!properties value

!name value

!type Int



############# !context

############## !graphqlBuiltInType true

############## !graphqlName value

############## !graphqlTypeFlat Int

############## !graphqlTypeShort scalar

############ !!properties values

!name values

!type \[Int!]



############# !context

############## !graphqlBuiltInType true

############## !graphqlName values

############## !graphqlTypeFlat Int

############## !graphqlTypeShort scalar

############ !!properties operator

!name operator

!type String!



############# !context

############## !graphqlBuiltInType true

############## !graphqlName operator

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

########### !!properties x

!name x

!type FilterDataIntInput



############ !context

############# !graphqlBuiltInType false

############# !graphqlName x

############# !graphqlTypeFlat FilterDataIntInput

############# !graphqlTypeShort input

############ !!properties value

!name value

!type Int



############# !context

############## !graphqlBuiltInType true

############## !graphqlName value

############## !graphqlTypeFlat Int

############## !graphqlTypeShort scalar

############ !!properties values

!name values

!type \[Int!]



############# !context

############## !graphqlBuiltInType true

############## !graphqlName values

############## !graphqlTypeFlat Int

############## !graphqlTypeShort scalar

############ !!properties operator

!name operator

!type String!



############# !context

############## !graphqlBuiltInType true

############## !graphqlName operator

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

########### !!properties y

!name y

!type FilterDataIntInput



############ !context

############# !graphqlBuiltInType false

############# !graphqlName y

############# !graphqlTypeFlat FilterDataIntInput

############# !graphqlTypeShort input

############ !!properties value

!name value

!type Int



############# !context

############## !graphqlBuiltInType true

############## !graphqlName value

############## !graphqlTypeFlat Int

############## !graphqlTypeShort scalar

############ !!properties values

!name values

!type \[Int!]



############# !context

############## !graphqlBuiltInType true

############## !graphqlName values

############## !graphqlTypeFlat Int

############## !graphqlTypeShort scalar

############ !!properties operator

!name operator

!type String!



############# !context

############## !graphqlBuiltInType true

############## !graphqlName operator

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

########## !!properties param

!name param

!type FilterDataParamInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName param

############ !graphqlTypeFlat FilterDataParamInput

############ !graphqlTypeShort input

########### !!properties name

!name name

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName name

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties value

!name value

!type FilterDataStringInput



############ !context

############# !graphqlBuiltInType false

############# !graphqlName value

############# !graphqlTypeFlat FilterDataStringInput

############# !graphqlTypeShort input

############ !!properties value

!name value

!type String



############# !context

############## !graphqlBuiltInType true

############## !graphqlName value

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

############ !!properties values

!name values

!type \[String!]



############# !context

############## !graphqlBuiltInType true

############## !graphqlName values

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

############ !!properties operator

!name operator

!type String!



############# !context

############## !graphqlBuiltInType true

############## !graphqlName operator

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

########## !!properties event_properties

!name event\_properties

!type \[FilterDataCustomEventPropertyInput]



########### !context

############ !graphqlBuiltInType false

############ !graphqlName event_properties

############ !graphqlTypeFlat FilterDataCustomEventPropertyInput

############ !graphqlTypeShort input

########### !!properties name

!name name

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName name

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties value_str

!name value\_str

!type FilterDataStringInput



############ !context

############# !graphqlBuiltInType false

############# !graphqlName value_str

############# !graphqlTypeFlat FilterDataStringInput

############# !graphqlTypeShort input

############ !!properties value

!name value

!type String



############# !context

############## !graphqlBuiltInType true

############## !graphqlName value

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

############ !!properties values

!name values

!type \[String!]



############# !context

############## !graphqlBuiltInType true

############## !graphqlName values

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

############ !!properties operator

!name operator

!type String!



############# !context

############## !graphqlBuiltInType true

############## !graphqlName operator

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

########### !!properties value_int

!name value\_int

!type FilterDataIntInput



############ !context

############# !graphqlBuiltInType false

############# !graphqlName value_int

############# !graphqlTypeFlat FilterDataIntInput

############# !graphqlTypeShort input

############ !!properties value

!name value

!type Int



############# !context

############## !graphqlBuiltInType true

############## !graphqlName value

############## !graphqlTypeFlat Int

############## !graphqlTypeShort scalar

############ !!properties values

!name values

!type \[Int!]



############# !context

############## !graphqlBuiltInType true

############## !graphqlName values

############## !graphqlTypeFlat Int

############## !graphqlTypeShort scalar

############ !!properties operator

!name operator

!type String!



############# !context

############## !graphqlBuiltInType true

############## !graphqlName operator

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

########### !!properties value_bool

!name value\_bool

!type FilterDataBoolInput



############ !context

############# !graphqlBuiltInType false

############# !graphqlName value_bool

############# !graphqlTypeFlat FilterDataBoolInput

############# !graphqlTypeShort input

############ !!properties value

!name value

!type Boolean!



############# !context

############## !graphqlBuiltInType true

############## !graphqlName value

############## !graphqlTypeFlat Boolean

############## !graphqlTypeShort scalar

############ !!properties operator

!name operator

!type String!



############# !context

############## !graphqlBuiltInType true

############## !graphqlName operator

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

########### !!properties value_float

!name value\_float

!type FilterDataFloatInput



############ !context

############# !graphqlBuiltInType false

############# !graphqlName value_float

############# !graphqlTypeFlat FilterDataFloatInput

############# !graphqlTypeShort input

############ !!properties values

!name values

!type \[Float]



############# !context

############## !graphqlBuiltInType true

############## !graphqlName values

############## !graphqlTypeFlat Float

############## !graphqlTypeShort scalar

############ !!properties value

!name value

!type Float



############# !context

############## !graphqlBuiltInType true

############## !graphqlName value

############## !graphqlTypeFlat Float

############## !graphqlTypeShort scalar

############ !!properties operator

!name operator

!type String!



############# !context

############## !graphqlBuiltInType true

############## !graphqlName operator

############## !graphqlTypeFlat String

############## !graphqlTypeShort scalar

######### !!properties defined_event_id

!name defined\_event\_id

!type String



########## !context

########### !graphqlBuiltInType true

########### !graphqlName defined_event_id

########### !graphqlTypeFlat String

########### !graphqlTypeShort scalar

######### !!properties stable_id

!name stable\_id

!type String



########## !context

########### !graphqlBuiltInType true

########### !graphqlName stable_id

########### !graphqlTypeFlat String

########### !graphqlTypeShort scalar

######### !!properties parent_filter_stable_id

!name parent\_filter\_stable\_id

!type String



########## !context

########### !graphqlBuiltInType true

########### !graphqlName parent_filter_stable_id

########### !graphqlTypeFlat String

########### !graphqlTypeShort scalar

###### !!properties filters

!name filters

!type FiltersInput



####### !context

######## !graphqlBuiltInType false

######## !graphqlName filters

######## !graphqlTypeFlat FiltersInput

######## !graphqlTypeShort input

####### !!properties must

!name must

!type \[FilterInput]



######## !context

######### !graphqlBuiltInType false

######### !graphqlName must

######### !graphqlTypeFlat FilterInput

######### !graphqlTypeShort input

######## !!properties name

!name name

!type String!



######### !context

########## !graphqlBuiltInType true

########## !graphqlName name

########## !graphqlTypeFlat String

########## !graphqlTypeShort scalar

######## !!properties unit

!name unit

!type String



######### !context

########## !graphqlBuiltInType true

########## !graphqlName unit

########## !graphqlTypeFlat String

########## !graphqlTypeShort scalar

######## !!properties group

!name group

!type String



######### !context

########## !graphqlBuiltInType true

########## !graphqlName group

########## !graphqlTypeFlat String

########## !graphqlTypeShort scalar

######## !!properties data

!name data

!type FilterDataInput!



######### !context

########## !graphqlBuiltInType false

########## !graphqlName data

########## !graphqlTypeFlat FilterDataInput

########## !graphqlTypeShort input

######### !!properties string

!name string

!type FilterDataStringInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName string

########### !graphqlTypeFlat FilterDataStringInput

########### !graphqlTypeShort input

########## !!properties value

!name value

!type String



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[String!]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties int

!name int

!type FilterDataIntInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName int

########### !graphqlTypeFlat FilterDataIntInput

########### !graphqlTypeShort input

########## !!properties value

!name value

!type Int



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[Int!]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties bool

!name bool

!type FilterDataBoolInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName bool

########### !graphqlTypeFlat FilterDataBoolInput

########### !graphqlTypeShort input

########## !!properties value

!name value

!type Boolean!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat Boolean

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties event

!name event

!type FilterDataEventInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName event

########### !graphqlTypeFlat FilterDataEventInput

########### !graphqlTypeShort input

########## !!properties type

!name type

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName type

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties group

!name group

!type FilterDataStringInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName group

############ !graphqlTypeFlat FilterDataStringInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties element

!name element

!type FilterDataStringInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName element

############ !graphqlTypeFlat FilterDataStringInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties txt

!name txt

!type FilterDataStringInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName txt

############ !graphqlTypeFlat FilterDataStringInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties element_path

!name element\_path

!type FilterDataStringInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName element_path

############ !graphqlTypeFlat FilterDataStringInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties location

!name location

!type FilterDataStringInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName location

############ !graphqlTypeFlat FilterDataStringInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties value

!name value

!type FilterDataStringInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName value

############ !graphqlTypeFlat FilterDataStringInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties height

!name height

!type FilterDataIntInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName height

############ !graphqlTypeFlat FilterDataIntInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type Int



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[Int!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties width

!name width

!type FilterDataIntInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName width

############ !graphqlTypeFlat FilterDataIntInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type Int



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[Int!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties timestamp

!name timestamp

!type FilterDataIntInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName timestamp

############ !graphqlTypeFlat FilterDataIntInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type Int



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[Int!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties x

!name x

!type FilterDataIntInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName x

############ !graphqlTypeFlat FilterDataIntInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type Int



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[Int!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties y

!name y

!type FilterDataIntInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName y

############ !graphqlTypeFlat FilterDataIntInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type Int



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[Int!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

######### !!properties param

!name param

!type FilterDataParamInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName param

########### !graphqlTypeFlat FilterDataParamInput

########### !graphqlTypeShort input

########## !!properties name

!name name

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName name

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties value

!name value

!type FilterDataStringInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName value

############ !graphqlTypeFlat FilterDataStringInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

######### !!properties event_properties

!name event\_properties

!type \[FilterDataCustomEventPropertyInput]



########## !context

########### !graphqlBuiltInType false

########### !graphqlName event_properties

########### !graphqlTypeFlat FilterDataCustomEventPropertyInput

########### !graphqlTypeShort input

########## !!properties name

!name name

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName name

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties value_str

!name value\_str

!type FilterDataStringInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName value_str

############ !graphqlTypeFlat FilterDataStringInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties value_int

!name value\_int

!type FilterDataIntInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName value_int

############ !graphqlTypeFlat FilterDataIntInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type Int



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[Int!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties value_bool

!name value\_bool

!type FilterDataBoolInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName value_bool

############ !graphqlTypeFlat FilterDataBoolInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type Boolean!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Boolean

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties value_float

!name value\_float

!type FilterDataFloatInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName value_float

############ !graphqlTypeFlat FilterDataFloatInput

############ !graphqlTypeShort input

########### !!properties values

!name values

!type \[Float]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat Float

############# !graphqlTypeShort scalar

########### !!properties value

!name value

!type Float



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Float

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

######## !!properties defined_event_id

!name defined\_event\_id

!type String



######### !context

########## !graphqlBuiltInType true

########## !graphqlName defined_event_id

########## !graphqlTypeFlat String

########## !graphqlTypeShort scalar

######## !!properties stable_id

!name stable\_id

!type String



######### !context

########## !graphqlBuiltInType true

########## !graphqlName stable_id

########## !graphqlTypeFlat String

########## !graphqlTypeShort scalar

######## !!properties parent_filter_stable_id

!name parent\_filter\_stable\_id

!type String



######### !context

########## !graphqlBuiltInType true

########## !graphqlName parent_filter_stable_id

########## !graphqlTypeFlat String

########## !graphqlTypeShort scalar

####### !!properties should

!name should

!type \[FilterInput]



######## !context

######### !graphqlBuiltInType false

######### !graphqlName should

######### !graphqlTypeFlat FilterInput

######### !graphqlTypeShort input

######## !!properties name

!name name

!type String!



######### !context

########## !graphqlBuiltInType true

########## !graphqlName name

########## !graphqlTypeFlat String

########## !graphqlTypeShort scalar

######## !!properties unit

!name unit

!type String



######### !context

########## !graphqlBuiltInType true

########## !graphqlName unit

########## !graphqlTypeFlat String

########## !graphqlTypeShort scalar

######## !!properties group

!name group

!type String



######### !context

########## !graphqlBuiltInType true

########## !graphqlName group

########## !graphqlTypeFlat String

########## !graphqlTypeShort scalar

######## !!properties data

!name data

!type FilterDataInput!



######### !context

########## !graphqlBuiltInType false

########## !graphqlName data

########## !graphqlTypeFlat FilterDataInput

########## !graphqlTypeShort input

######### !!properties string

!name string

!type FilterDataStringInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName string

########### !graphqlTypeFlat FilterDataStringInput

########### !graphqlTypeShort input

########## !!properties value

!name value

!type String



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[String!]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties int

!name int

!type FilterDataIntInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName int

########### !graphqlTypeFlat FilterDataIntInput

########### !graphqlTypeShort input

########## !!properties value

!name value

!type Int



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[Int!]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties bool

!name bool

!type FilterDataBoolInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName bool

########### !graphqlTypeFlat FilterDataBoolInput

########### !graphqlTypeShort input

########## !!properties value

!name value

!type Boolean!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat Boolean

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties event

!name event

!type FilterDataEventInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName event

########### !graphqlTypeFlat FilterDataEventInput

########### !graphqlTypeShort input

########## !!properties type

!name type

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName type

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties group

!name group

!type FilterDataStringInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName group

############ !graphqlTypeFlat FilterDataStringInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties element

!name element

!type FilterDataStringInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName element

############ !graphqlTypeFlat FilterDataStringInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties txt

!name txt

!type FilterDataStringInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName txt

############ !graphqlTypeFlat FilterDataStringInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties element_path

!name element\_path

!type FilterDataStringInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName element_path

############ !graphqlTypeFlat FilterDataStringInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties location

!name location

!type FilterDataStringInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName location

############ !graphqlTypeFlat FilterDataStringInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties value

!name value

!type FilterDataStringInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName value

############ !graphqlTypeFlat FilterDataStringInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties height

!name height

!type FilterDataIntInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName height

############ !graphqlTypeFlat FilterDataIntInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type Int



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[Int!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties width

!name width

!type FilterDataIntInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName width

############ !graphqlTypeFlat FilterDataIntInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type Int



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[Int!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties timestamp

!name timestamp

!type FilterDataIntInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName timestamp

############ !graphqlTypeFlat FilterDataIntInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type Int



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[Int!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties x

!name x

!type FilterDataIntInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName x

############ !graphqlTypeFlat FilterDataIntInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type Int



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[Int!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties y

!name y

!type FilterDataIntInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName y

############ !graphqlTypeFlat FilterDataIntInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type Int



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[Int!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

######### !!properties param

!name param

!type FilterDataParamInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName param

########### !graphqlTypeFlat FilterDataParamInput

########### !graphqlTypeShort input

########## !!properties name

!name name

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName name

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties value

!name value

!type FilterDataStringInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName value

############ !graphqlTypeFlat FilterDataStringInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

######### !!properties event_properties

!name event\_properties

!type \[FilterDataCustomEventPropertyInput]



########## !context

########### !graphqlBuiltInType false

########### !graphqlName event_properties

########### !graphqlTypeFlat FilterDataCustomEventPropertyInput

########### !graphqlTypeShort input

########## !!properties name

!name name

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName name

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties value_str

!name value\_str

!type FilterDataStringInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName value_str

############ !graphqlTypeFlat FilterDataStringInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties value_int

!name value\_int

!type FilterDataIntInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName value_int

############ !graphqlTypeFlat FilterDataIntInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type Int



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[Int!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties value_bool

!name value\_bool

!type FilterDataBoolInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName value_bool

############ !graphqlTypeFlat FilterDataBoolInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type Boolean!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Boolean

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties value_float

!name value\_float

!type FilterDataFloatInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName value_float

############ !graphqlTypeFlat FilterDataFloatInput

############ !graphqlTypeShort input

########### !!properties values

!name values

!type \[Float]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat Float

############# !graphqlTypeShort scalar

########### !!properties value

!name value

!type Float



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Float

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

######## !!properties defined_event_id

!name defined\_event\_id

!type String



######### !context

########## !graphqlBuiltInType true

########## !graphqlName defined_event_id

########## !graphqlTypeFlat String

########## !graphqlTypeShort scalar

######## !!properties stable_id

!name stable\_id

!type String



######### !context

########## !graphqlBuiltInType true

########## !graphqlName stable_id

########## !graphqlTypeFlat String

########## !graphqlTypeShort scalar

######## !!properties parent_filter_stable_id

!name parent\_filter\_stable\_id

!type String



######### !context

########## !graphqlBuiltInType true

########## !graphqlName parent_filter_stable_id

########## !graphqlTypeFlat String

########## !graphqlTypeShort scalar

####### !!properties must_not

!name must\_not

!type \[FilterInput]



######## !context

######### !graphqlBuiltInType false

######### !graphqlName must_not

######### !graphqlTypeFlat FilterInput

######### !graphqlTypeShort input

######## !!properties name

!name name

!type String!



######### !context

########## !graphqlBuiltInType true

########## !graphqlName name

########## !graphqlTypeFlat String

########## !graphqlTypeShort scalar

######## !!properties unit

!name unit

!type String



######### !context

########## !graphqlBuiltInType true

########## !graphqlName unit

########## !graphqlTypeFlat String

########## !graphqlTypeShort scalar

######## !!properties group

!name group

!type String



######### !context

########## !graphqlBuiltInType true

########## !graphqlName group

########## !graphqlTypeFlat String

########## !graphqlTypeShort scalar

######## !!properties data

!name data

!type FilterDataInput!



######### !context

########## !graphqlBuiltInType false

########## !graphqlName data

########## !graphqlTypeFlat FilterDataInput

########## !graphqlTypeShort input

######### !!properties string

!name string

!type FilterDataStringInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName string

########### !graphqlTypeFlat FilterDataStringInput

########### !graphqlTypeShort input

########## !!properties value

!name value

!type String



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[String!]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties int

!name int

!type FilterDataIntInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName int

########### !graphqlTypeFlat FilterDataIntInput

########### !graphqlTypeShort input

########## !!properties value

!name value

!type Int



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[Int!]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties bool

!name bool

!type FilterDataBoolInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName bool

########### !graphqlTypeFlat FilterDataBoolInput

########### !graphqlTypeShort input

########## !!properties value

!name value

!type Boolean!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat Boolean

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties event

!name event

!type FilterDataEventInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName event

########### !graphqlTypeFlat FilterDataEventInput

########### !graphqlTypeShort input

########## !!properties type

!name type

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName type

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties group

!name group

!type FilterDataStringInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName group

############ !graphqlTypeFlat FilterDataStringInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties element

!name element

!type FilterDataStringInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName element

############ !graphqlTypeFlat FilterDataStringInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties txt

!name txt

!type FilterDataStringInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName txt

############ !graphqlTypeFlat FilterDataStringInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties element_path

!name element\_path

!type FilterDataStringInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName element_path

############ !graphqlTypeFlat FilterDataStringInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties location

!name location

!type FilterDataStringInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName location

############ !graphqlTypeFlat FilterDataStringInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties value

!name value

!type FilterDataStringInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName value

############ !graphqlTypeFlat FilterDataStringInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties height

!name height

!type FilterDataIntInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName height

############ !graphqlTypeFlat FilterDataIntInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type Int



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[Int!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties width

!name width

!type FilterDataIntInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName width

############ !graphqlTypeFlat FilterDataIntInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type Int



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[Int!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties timestamp

!name timestamp

!type FilterDataIntInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName timestamp

############ !graphqlTypeFlat FilterDataIntInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type Int



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[Int!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties x

!name x

!type FilterDataIntInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName x

############ !graphqlTypeFlat FilterDataIntInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type Int



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[Int!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties y

!name y

!type FilterDataIntInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName y

############ !graphqlTypeFlat FilterDataIntInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type Int



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[Int!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

######### !!properties param

!name param

!type FilterDataParamInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName param

########### !graphqlTypeFlat FilterDataParamInput

########### !graphqlTypeShort input

########## !!properties name

!name name

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName name

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties value

!name value

!type FilterDataStringInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName value

############ !graphqlTypeFlat FilterDataStringInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

######### !!properties event_properties

!name event\_properties

!type \[FilterDataCustomEventPropertyInput]



########## !context

########### !graphqlBuiltInType false

########### !graphqlName event_properties

########### !graphqlTypeFlat FilterDataCustomEventPropertyInput

########### !graphqlTypeShort input

########## !!properties name

!name name

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName name

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties value_str

!name value\_str

!type FilterDataStringInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName value_str

############ !graphqlTypeFlat FilterDataStringInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties value_int

!name value\_int

!type FilterDataIntInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName value_int

############ !graphqlTypeFlat FilterDataIntInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type Int



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[Int!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties value_bool

!name value\_bool

!type FilterDataBoolInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName value_bool

############ !graphqlTypeFlat FilterDataBoolInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type Boolean!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Boolean

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties value_float

!name value\_float

!type FilterDataFloatInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName value_float

############ !graphqlTypeFlat FilterDataFloatInput

############ !graphqlTypeShort input

########### !!properties values

!name values

!type \[Float]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat Float

############# !graphqlTypeShort scalar

########### !!properties value

!name value

!type Float



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Float

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

######## !!properties defined_event_id

!name defined\_event\_id

!type String



######### !context

########## !graphqlBuiltInType true

########## !graphqlName defined_event_id

########## !graphqlTypeFlat String

########## !graphqlTypeShort scalar

######## !!properties stable_id

!name stable\_id

!type String



######### !context

########## !graphqlBuiltInType true

########## !graphqlName stable_id

########## !graphqlTypeFlat String

########## !graphqlTypeShort scalar

######## !!properties parent_filter_stable_id

!name parent\_filter\_stable\_id

!type String



######### !context

########## !graphqlBuiltInType true

########## !graphqlName parent_filter_stable_id

########## !graphqlTypeFlat String

########## !graphqlTypeShort scalar

###### !!properties conversion_value

!name conversion\_value

!type FunnelConversionValueInput



####### !context

######## !graphqlBuiltInType false

######## !graphqlName conversion_value

######## !graphqlTypeFlat FunnelConversionValueInput

######## !graphqlTypeShort input

####### !!properties property_name

!name property\_name

!type String!



######## !context

######### !graphqlBuiltInType true

######### !graphqlName property_name

######### !graphqlTypeFlat String

######### !graphqlTypeShort scalar

####### !!properties value_type

!name value\_type

!type String!



######## !context

######### !graphqlBuiltInType true

######### !graphqlName value_type

######### !graphqlTypeFlat String

######### !graphqlTypeShort scalar

####### !!properties label

!name label

!type String!



######## !context

######### !graphqlBuiltInType true

######### !graphqlName label

######### !graphqlTypeFlat String

######### !graphqlTypeShort scalar

##### !!properties is_public

!name is\_public

!type Boolean



###### !context

####### !graphqlBuiltInType true

####### !graphqlName is_public

####### !graphqlTypeFlat Boolean

####### !graphqlTypeShort scalar

### !!definitions

#### !title Returns

#### !!properties funnel_id

!name funnel\_id

!type ID!



##### !context

###### !graphqlBuiltInType true

###### !graphqlName funnel_id

###### !graphqlTypeFlat ID

###### !graphqlTypeShort scalar

#### !!properties created_by_agent_id

!name created\_by\_agent\_id

!type String!



##### !context

###### !graphqlBuiltInType true

###### !graphqlName created_by_agent_id

###### !graphqlTypeFlat String

###### !graphqlTypeShort scalar

#### !!properties created_by_login

!name created\_by\_login

!type String!



##### !context

###### !graphqlBuiltInType true

###### !graphqlName created_by_login

###### !graphqlTypeFlat String

###### !graphqlTypeShort scalar

#### !!properties website_id

!name website\_id

!type ID!



##### !context

###### !graphqlBuiltInType true

###### !graphqlName website_id

###### !graphqlTypeFlat ID

###### !graphqlTypeShort scalar

#### !!properties name

!name name

!type String!



##### !context

###### !graphqlBuiltInType true

###### !graphqlName name

###### !graphqlTypeFlat String

###### !graphqlTypeShort scalar

#### !!properties description

!name description

!type String!



##### !context

###### !graphqlBuiltInType true

###### !graphqlName description

###### !graphqlTypeFlat String

###### !graphqlTypeShort scalar

#### !!properties segment_id

!name segment\_id

!type String!



##### !context

###### !graphqlBuiltInType true

###### !graphqlName segment_id

###### !graphqlTypeFlat String

###### !graphqlTypeShort scalar

#### !!properties compute

!name compute

!type ComputeFunnel



##### !context

###### !graphqlBuiltInType false

###### !graphqlName compute

###### !graphqlTypeFlat ComputeFunnel

###### !graphqlTypeShort object

##### !!properties date_range

!name date\_range

!type DateRange



###### !context

####### !graphqlBuiltInType false

####### !graphqlName date_range

####### !graphqlTypeFlat DateRange

####### !graphqlTypeShort object

###### !!properties from

!name from

!type RelativeDate



####### !context

######## !graphqlBuiltInType false

######## !graphqlName from

######## !graphqlTypeFlat RelativeDate

######## !graphqlTypeShort scalar

###### !!properties to

!name to

!type RelativeDate



####### !context

######## !graphqlBuiltInType false

######## !graphqlName to

######## !graphqlTypeFlat RelativeDate

######## !graphqlTypeShort scalar

##### !!properties steps

!name steps

!type \[FunnelStep]!



###### !context

####### !graphqlBuiltInType false

####### !graphqlName steps

####### !graphqlTypeFlat FunnelStep

####### !graphqlTypeShort object

###### !!properties name

!name name

!type String



####### !context

######## !graphqlBuiltInType true

######## !graphqlName name

######## !graphqlTypeFlat String

######## !graphqlTypeShort scalar

###### !!properties filters

!name filters

!type Filters



####### !context

######## !graphqlBuiltInType false

######## !graphqlName filters

######## !graphqlTypeFlat Filters

######## !graphqlTypeShort object

####### !!properties must

!name must

!type \[Filter]!



######## !context

######### !graphqlBuiltInType false

######### !graphqlName must

######### !graphqlTypeFlat Filter

######### !graphqlTypeShort object

######## !!properties name

!name name

!type String!



######### !context

########## !graphqlBuiltInType true

########## !graphqlName name

########## !graphqlTypeFlat String

########## !graphqlTypeShort scalar

######## !!properties unit

!name unit

!type String



######### !context

########## !graphqlBuiltInType true

########## !graphqlName unit

########## !graphqlTypeFlat String

########## !graphqlTypeShort scalar

######## !!properties group

!name group

!type String



######### !context

########## !graphqlBuiltInType true

########## !graphqlName group

########## !graphqlTypeFlat String

########## !graphqlTypeShort scalar

######## !!properties data

!name data

!type FilterData!



######### !context

########## !graphqlBuiltInType false

########## !graphqlName data

########## !graphqlTypeFlat FilterData

########## !graphqlTypeShort object

######### !!properties string

!name string

!type FilterDataString



########## !context

########### !graphqlBuiltInType false

########### !graphqlName string

########### !graphqlTypeFlat FilterDataString

########### !graphqlTypeShort object

########## !!properties value

!name value

!type String



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[String]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties int

!name int

!type FilterDataInt



########## !context

########### !graphqlBuiltInType false

########### !graphqlName int

########### !graphqlTypeFlat FilterDataInt

########### !graphqlTypeShort object

########## !!properties value

!name value

!type Int



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[Int]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties bool

!name bool

!type FilterDataBool



########## !context

########### !graphqlBuiltInType false

########### !graphqlName bool

########### !graphqlTypeFlat FilterDataBool

########### !graphqlTypeShort object

########## !!properties value

!name value

!type Boolean



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat Boolean

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties event

!name event

!type FilterDataEvent



########## !context

########### !graphqlBuiltInType false

########### !graphqlName event

########### !graphqlTypeFlat FilterDataEvent

########### !graphqlTypeShort object

########## !!properties type

!name type

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName type

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties group

!name group

!type FilterDataString



########### !context

############ !graphqlBuiltInType false

############ !graphqlName group

############ !graphqlTypeFlat FilterDataString

############ !graphqlTypeShort object

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties element

!name element

!type FilterDataString



########### !context

############ !graphqlBuiltInType false

############ !graphqlName element

############ !graphqlTypeFlat FilterDataString

############ !graphqlTypeShort object

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties txt

!name txt

!type FilterDataString



########### !context

############ !graphqlBuiltInType false

############ !graphqlName txt

############ !graphqlTypeFlat FilterDataString

############ !graphqlTypeShort object

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties element_path

!name element\_path

!type FilterDataString



########### !context

############ !graphqlBuiltInType false

############ !graphqlName element_path

############ !graphqlTypeFlat FilterDataString

############ !graphqlTypeShort object

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties location

!name location

!type FilterDataString



########### !context

############ !graphqlBuiltInType false

############ !graphqlName location

############ !graphqlTypeFlat FilterDataString

############ !graphqlTypeShort object

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties value

!name value

!type FilterDataString



########### !context

############ !graphqlBuiltInType false

############ !graphqlName value

############ !graphqlTypeFlat FilterDataString

############ !graphqlTypeShort object

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties height

!name height

!type FilterDataInt



########### !context

############ !graphqlBuiltInType false

############ !graphqlName height

############ !graphqlTypeFlat FilterDataInt

############ !graphqlTypeShort object

########### !!properties value

!name value

!type Int



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[Int]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties width

!name width

!type FilterDataInt



########### !context

############ !graphqlBuiltInType false

############ !graphqlName width

############ !graphqlTypeFlat FilterDataInt

############ !graphqlTypeShort object

########### !!properties value

!name value

!type Int



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[Int]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties timestamp

!name timestamp

!type FilterDataInt



########### !context

############ !graphqlBuiltInType false

############ !graphqlName timestamp

############ !graphqlTypeFlat FilterDataInt

############ !graphqlTypeShort object

########### !!properties value

!name value

!type Int



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[Int]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties x

!name x

!type FilterDataInt



########### !context

############ !graphqlBuiltInType false

############ !graphqlName x

############ !graphqlTypeFlat FilterDataInt

############ !graphqlTypeShort object

########### !!properties value

!name value

!type Int



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[Int]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties y

!name y

!type FilterDataInt



########### !context

############ !graphqlBuiltInType false

############ !graphqlName y

############ !graphqlTypeFlat FilterDataInt

############ !graphqlTypeShort object

########### !!properties value

!name value

!type Int



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[Int]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

######### !!properties param

!name param

!type FilterDataParam



########## !context

########### !graphqlBuiltInType false

########### !graphqlName param

########### !graphqlTypeFlat FilterDataParam

########### !graphqlTypeShort object

########## !!properties name

!name name

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName name

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties value

!name value

!type FilterDataString



########### !context

############ !graphqlBuiltInType false

############ !graphqlName value

############ !graphqlTypeFlat FilterDataString

############ !graphqlTypeShort object

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

######### !!properties event_properties

!name event\_properties

!type \[FilterDataCustomEventProperty]



########## !context

########### !graphqlBuiltInType false

########### !graphqlName event_properties

########### !graphqlTypeFlat FilterDataCustomEventProperty

########### !graphqlTypeShort object

########## !!properties name

!name name

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName name

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties value_str

!name value\_str

!type FilterDataString



########### !context

############ !graphqlBuiltInType false

############ !graphqlName value_str

############ !graphqlTypeFlat FilterDataString

############ !graphqlTypeShort object

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties value_bool

!name value\_bool

!type FilterDataBool



########### !context

############ !graphqlBuiltInType false

############ !graphqlName value_bool

############ !graphqlTypeFlat FilterDataBool

############ !graphqlTypeShort object

########### !!properties value

!name value

!type Boolean



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Boolean

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties value_int

!name value\_int

!type FilterDataInt



########### !context

############ !graphqlBuiltInType false

############ !graphqlName value_int

############ !graphqlTypeFlat FilterDataInt

############ !graphqlTypeShort object

########### !!properties value

!name value

!type Int



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[Int]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties value_float

!name value\_float

!type FilterDataFloat



########### !context

############ !graphqlBuiltInType false

############ !graphqlName value_float

############ !graphqlTypeFlat FilterDataFloat

############ !graphqlTypeShort object

########### !!properties value

!name value

!type Float!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Float

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[Float!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat Float

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

######## !!properties defined_event_id

!name defined\_event\_id

!type String



######### !context

########## !graphqlBuiltInType true

########## !graphqlName defined_event_id

########## !graphqlTypeFlat String

########## !graphqlTypeShort scalar

######## !!properties stable_id

!name stable\_id

!type String



######### !context

########## !graphqlBuiltInType true

########## !graphqlName stable_id

########## !graphqlTypeFlat String

########## !graphqlTypeShort scalar

######## !!properties parent_filter_stable_id

!name parent\_filter\_stable\_id

!type String



######### !context

########## !graphqlBuiltInType true

########## !graphqlName parent_filter_stable_id

########## !graphqlTypeFlat String

########## !graphqlTypeShort scalar

####### !!properties should

!name should

!type \[Filter]!



######## !context

######### !graphqlBuiltInType false

######### !graphqlName should

######### !graphqlTypeFlat Filter

######### !graphqlTypeShort object

######## !!properties name

!name name

!type String!



######### !context

########## !graphqlBuiltInType true

########## !graphqlName name

########## !graphqlTypeFlat String

########## !graphqlTypeShort scalar

######## !!properties unit

!name unit

!type String



######### !context

########## !graphqlBuiltInType true

########## !graphqlName unit

########## !graphqlTypeFlat String

########## !graphqlTypeShort scalar

######## !!properties group

!name group

!type String



######### !context

########## !graphqlBuiltInType true

########## !graphqlName group

########## !graphqlTypeFlat String

########## !graphqlTypeShort scalar

######## !!properties data

!name data

!type FilterData!



######### !context

########## !graphqlBuiltInType false

########## !graphqlName data

########## !graphqlTypeFlat FilterData

########## !graphqlTypeShort object

######### !!properties string

!name string

!type FilterDataString



########## !context

########### !graphqlBuiltInType false

########### !graphqlName string

########### !graphqlTypeFlat FilterDataString

########### !graphqlTypeShort object

########## !!properties value

!name value

!type String



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[String]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties int

!name int

!type FilterDataInt



########## !context

########### !graphqlBuiltInType false

########### !graphqlName int

########### !graphqlTypeFlat FilterDataInt

########### !graphqlTypeShort object

########## !!properties value

!name value

!type Int



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[Int]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties bool

!name bool

!type FilterDataBool



########## !context

########### !graphqlBuiltInType false

########### !graphqlName bool

########### !graphqlTypeFlat FilterDataBool

########### !graphqlTypeShort object

########## !!properties value

!name value

!type Boolean



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat Boolean

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties event

!name event

!type FilterDataEvent



########## !context

########### !graphqlBuiltInType false

########### !graphqlName event

########### !graphqlTypeFlat FilterDataEvent

########### !graphqlTypeShort object

########## !!properties type

!name type

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName type

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties group

!name group

!type FilterDataString



########### !context

############ !graphqlBuiltInType false

############ !graphqlName group

############ !graphqlTypeFlat FilterDataString

############ !graphqlTypeShort object

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties element

!name element

!type FilterDataString



########### !context

############ !graphqlBuiltInType false

############ !graphqlName element

############ !graphqlTypeFlat FilterDataString

############ !graphqlTypeShort object

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties txt

!name txt

!type FilterDataString



########### !context

############ !graphqlBuiltInType false

############ !graphqlName txt

############ !graphqlTypeFlat FilterDataString

############ !graphqlTypeShort object

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties element_path

!name element\_path

!type FilterDataString



########### !context

############ !graphqlBuiltInType false

############ !graphqlName element_path

############ !graphqlTypeFlat FilterDataString

############ !graphqlTypeShort object

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties location

!name location

!type FilterDataString



########### !context

############ !graphqlBuiltInType false

############ !graphqlName location

############ !graphqlTypeFlat FilterDataString

############ !graphqlTypeShort object

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties value

!name value

!type FilterDataString



########### !context

############ !graphqlBuiltInType false

############ !graphqlName value

############ !graphqlTypeFlat FilterDataString

############ !graphqlTypeShort object

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties height

!name height

!type FilterDataInt



########### !context

############ !graphqlBuiltInType false

############ !graphqlName height

############ !graphqlTypeFlat FilterDataInt

############ !graphqlTypeShort object

########### !!properties value

!name value

!type Int



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[Int]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties width

!name width

!type FilterDataInt



########### !context

############ !graphqlBuiltInType false

############ !graphqlName width

############ !graphqlTypeFlat FilterDataInt

############ !graphqlTypeShort object

########### !!properties value

!name value

!type Int



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[Int]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties timestamp

!name timestamp

!type FilterDataInt



########### !context

############ !graphqlBuiltInType false

############ !graphqlName timestamp

############ !graphqlTypeFlat FilterDataInt

############ !graphqlTypeShort object

########### !!properties value

!name value

!type Int



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[Int]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties x

!name x

!type FilterDataInt



########### !context

############ !graphqlBuiltInType false

############ !graphqlName x

############ !graphqlTypeFlat FilterDataInt

############ !graphqlTypeShort object

########### !!properties value

!name value

!type Int



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[Int]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties y

!name y

!type FilterDataInt



########### !context

############ !graphqlBuiltInType false

############ !graphqlName y

############ !graphqlTypeFlat FilterDataInt

############ !graphqlTypeShort object

########### !!properties value

!name value

!type Int



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[Int]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

######### !!properties param

!name param

!type FilterDataParam



########## !context

########### !graphqlBuiltInType false

########### !graphqlName param

########### !graphqlTypeFlat FilterDataParam

########### !graphqlTypeShort object

########## !!properties name

!name name

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName name

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties value

!name value

!type FilterDataString



########### !context

############ !graphqlBuiltInType false

############ !graphqlName value

############ !graphqlTypeFlat FilterDataString

############ !graphqlTypeShort object

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

######### !!properties event_properties

!name event\_properties

!type \[FilterDataCustomEventProperty]



########## !context

########### !graphqlBuiltInType false

########### !graphqlName event_properties

########### !graphqlTypeFlat FilterDataCustomEventProperty

########### !graphqlTypeShort object

########## !!properties name

!name name

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName name

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties value_str

!name value\_str

!type FilterDataString



########### !context

############ !graphqlBuiltInType false

############ !graphqlName value_str

############ !graphqlTypeFlat FilterDataString

############ !graphqlTypeShort object

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties value_bool

!name value\_bool

!type FilterDataBool



########### !context

############ !graphqlBuiltInType false

############ !graphqlName value_bool

############ !graphqlTypeFlat FilterDataBool

############ !graphqlTypeShort object

########### !!properties value

!name value

!type Boolean



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Boolean

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties value_int

!name value\_int

!type FilterDataInt



########### !context

############ !graphqlBuiltInType false

############ !graphqlName value_int

############ !graphqlTypeFlat FilterDataInt

############ !graphqlTypeShort object

########### !!properties value

!name value

!type Int



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[Int]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties value_float

!name value\_float

!type FilterDataFloat



########### !context

############ !graphqlBuiltInType false

############ !graphqlName value_float

############ !graphqlTypeFlat FilterDataFloat

############ !graphqlTypeShort object

########### !!properties value

!name value

!type Float!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Float

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[Float!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat Float

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

######## !!properties defined_event_id

!name defined\_event\_id

!type String



######### !context

########## !graphqlBuiltInType true

########## !graphqlName defined_event_id

########## !graphqlTypeFlat String

########## !graphqlTypeShort scalar

######## !!properties stable_id

!name stable\_id

!type String



######### !context

########## !graphqlBuiltInType true

########## !graphqlName stable_id

########## !graphqlTypeFlat String

########## !graphqlTypeShort scalar

######## !!properties parent_filter_stable_id

!name parent\_filter\_stable\_id

!type String



######### !context

########## !graphqlBuiltInType true

########## !graphqlName parent_filter_stable_id

########## !graphqlTypeFlat String

########## !graphqlTypeShort scalar

####### !!properties must_not

!name must\_not

!type \[Filter]!



######## !context

######### !graphqlBuiltInType false

######### !graphqlName must_not

######### !graphqlTypeFlat Filter

######### !graphqlTypeShort object

######## !!properties name

!name name

!type String!



######### !context

########## !graphqlBuiltInType true

########## !graphqlName name

########## !graphqlTypeFlat String

########## !graphqlTypeShort scalar

######## !!properties unit

!name unit

!type String



######### !context

########## !graphqlBuiltInType true

########## !graphqlName unit

########## !graphqlTypeFlat String

########## !graphqlTypeShort scalar

######## !!properties group

!name group

!type String



######### !context

########## !graphqlBuiltInType true

########## !graphqlName group

########## !graphqlTypeFlat String

########## !graphqlTypeShort scalar

######## !!properties data

!name data

!type FilterData!



######### !context

########## !graphqlBuiltInType false

########## !graphqlName data

########## !graphqlTypeFlat FilterData

########## !graphqlTypeShort object

######### !!properties string

!name string

!type FilterDataString



########## !context

########### !graphqlBuiltInType false

########### !graphqlName string

########### !graphqlTypeFlat FilterDataString

########### !graphqlTypeShort object

########## !!properties value

!name value

!type String



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[String]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties int

!name int

!type FilterDataInt



########## !context

########### !graphqlBuiltInType false

########### !graphqlName int

########### !graphqlTypeFlat FilterDataInt

########### !graphqlTypeShort object

########## !!properties value

!name value

!type Int



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[Int]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties bool

!name bool

!type FilterDataBool



########## !context

########### !graphqlBuiltInType false

########### !graphqlName bool

########### !graphqlTypeFlat FilterDataBool

########### !graphqlTypeShort object

########## !!properties value

!name value

!type Boolean



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat Boolean

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties event

!name event

!type FilterDataEvent



########## !context

########### !graphqlBuiltInType false

########### !graphqlName event

########### !graphqlTypeFlat FilterDataEvent

########### !graphqlTypeShort object

########## !!properties type

!name type

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName type

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties group

!name group

!type FilterDataString



########### !context

############ !graphqlBuiltInType false

############ !graphqlName group

############ !graphqlTypeFlat FilterDataString

############ !graphqlTypeShort object

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties element

!name element

!type FilterDataString



########### !context

############ !graphqlBuiltInType false

############ !graphqlName element

############ !graphqlTypeFlat FilterDataString

############ !graphqlTypeShort object

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties txt

!name txt

!type FilterDataString



########### !context

############ !graphqlBuiltInType false

############ !graphqlName txt

############ !graphqlTypeFlat FilterDataString

############ !graphqlTypeShort object

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties element_path

!name element\_path

!type FilterDataString



########### !context

############ !graphqlBuiltInType false

############ !graphqlName element_path

############ !graphqlTypeFlat FilterDataString

############ !graphqlTypeShort object

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties location

!name location

!type FilterDataString



########### !context

############ !graphqlBuiltInType false

############ !graphqlName location

############ !graphqlTypeFlat FilterDataString

############ !graphqlTypeShort object

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties value

!name value

!type FilterDataString



########### !context

############ !graphqlBuiltInType false

############ !graphqlName value

############ !graphqlTypeFlat FilterDataString

############ !graphqlTypeShort object

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties height

!name height

!type FilterDataInt



########### !context

############ !graphqlBuiltInType false

############ !graphqlName height

############ !graphqlTypeFlat FilterDataInt

############ !graphqlTypeShort object

########### !!properties value

!name value

!type Int



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[Int]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties width

!name width

!type FilterDataInt



########### !context

############ !graphqlBuiltInType false

############ !graphqlName width

############ !graphqlTypeFlat FilterDataInt

############ !graphqlTypeShort object

########### !!properties value

!name value

!type Int



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[Int]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties timestamp

!name timestamp

!type FilterDataInt



########### !context

############ !graphqlBuiltInType false

############ !graphqlName timestamp

############ !graphqlTypeFlat FilterDataInt

############ !graphqlTypeShort object

########### !!properties value

!name value

!type Int



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[Int]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties x

!name x

!type FilterDataInt



########### !context

############ !graphqlBuiltInType false

############ !graphqlName x

############ !graphqlTypeFlat FilterDataInt

############ !graphqlTypeShort object

########### !!properties value

!name value

!type Int



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[Int]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties y

!name y

!type FilterDataInt



########### !context

############ !graphqlBuiltInType false

############ !graphqlName y

############ !graphqlTypeFlat FilterDataInt

############ !graphqlTypeShort object

########### !!properties value

!name value

!type Int



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[Int]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

######### !!properties param

!name param

!type FilterDataParam



########## !context

########### !graphqlBuiltInType false

########### !graphqlName param

########### !graphqlTypeFlat FilterDataParam

########### !graphqlTypeShort object

########## !!properties name

!name name

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName name

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties value

!name value

!type FilterDataString



########### !context

############ !graphqlBuiltInType false

############ !graphqlName value

############ !graphqlTypeFlat FilterDataString

############ !graphqlTypeShort object

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

######### !!properties event_properties

!name event\_properties

!type \[FilterDataCustomEventProperty]



########## !context

########### !graphqlBuiltInType false

########### !graphqlName event_properties

########### !graphqlTypeFlat FilterDataCustomEventProperty

########### !graphqlTypeShort object

########## !!properties name

!name name

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName name

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties value_str

!name value\_str

!type FilterDataString



########### !context

############ !graphqlBuiltInType false

############ !graphqlName value_str

############ !graphqlTypeFlat FilterDataString

############ !graphqlTypeShort object

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties value_bool

!name value\_bool

!type FilterDataBool



########### !context

############ !graphqlBuiltInType false

############ !graphqlName value_bool

############ !graphqlTypeFlat FilterDataBool

############ !graphqlTypeShort object

########### !!properties value

!name value

!type Boolean



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Boolean

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties value_int

!name value\_int

!type FilterDataInt



########### !context

############ !graphqlBuiltInType false

############ !graphqlName value_int

############ !graphqlTypeFlat FilterDataInt

############ !graphqlTypeShort object

########### !!properties value

!name value

!type Int



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[Int]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties value_float

!name value\_float

!type FilterDataFloat



########### !context

############ !graphqlBuiltInType false

############ !graphqlName value_float

############ !graphqlTypeFlat FilterDataFloat

############ !graphqlTypeShort object

########### !!properties value

!name value

!type Float!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Float

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[Float!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat Float

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

######## !!properties defined_event_id

!name defined\_event\_id

!type String



######### !context

########## !graphqlBuiltInType true

########## !graphqlName defined_event_id

########## !graphqlTypeFlat String

########## !graphqlTypeShort scalar

######## !!properties stable_id

!name stable\_id

!type String



######### !context

########## !graphqlBuiltInType true

########## !graphqlName stable_id

########## !graphqlTypeFlat String

########## !graphqlTypeShort scalar

######## !!properties parent_filter_stable_id

!name parent\_filter\_stable\_id

!type String



######### !context

########## !graphqlBuiltInType true

########## !graphqlName parent_filter_stable_id

########## !graphqlTypeFlat String

########## !graphqlTypeShort scalar

##### !!properties conversion_value

!name conversion\_value

!type FunnelConversionValue



###### !context

####### !graphqlBuiltInType false

####### !graphqlName conversion_value

####### !graphqlTypeFlat FunnelConversionValue

####### !graphqlTypeShort object

###### !!properties property_name

!name property\_name

!type String!



####### !context

######## !graphqlBuiltInType true

######## !graphqlName property_name

######## !graphqlTypeFlat String

######## !graphqlTypeShort scalar

###### !!properties value_type

!name value\_type

!type String!



####### !context

######## !graphqlBuiltInType true

######## !graphqlName value_type

######## !graphqlTypeFlat String

######## !graphqlTypeShort scalar

###### !!properties label

!name label

!type String!



####### !context

######## !graphqlBuiltInType true

######## !graphqlName label

######## !graphqlTypeFlat String

######## !graphqlTypeShort scalar

##### !!properties type

!name type

!type String



###### !context

####### !graphqlBuiltInType true

####### !graphqlName type

####### !graphqlTypeFlat String

####### !graphqlTypeShort scalar

##### !!properties filters

!name filters

!type Filters



###### !context

####### !graphqlBuiltInType false

####### !graphqlName filters

####### !graphqlTypeFlat Filters

####### !graphqlTypeShort object

###### !!properties must

!name must

!type \[Filter]!



####### !context

######## !graphqlBuiltInType false

######## !graphqlName must

######## !graphqlTypeFlat Filter

######## !graphqlTypeShort object

####### !!properties name

!name name

!type String!



######## !context

######### !graphqlBuiltInType true

######### !graphqlName name

######### !graphqlTypeFlat String

######### !graphqlTypeShort scalar

####### !!properties unit

!name unit

!type String



######## !context

######### !graphqlBuiltInType true

######### !graphqlName unit

######### !graphqlTypeFlat String

######### !graphqlTypeShort scalar

####### !!properties group

!name group

!type String



######## !context

######### !graphqlBuiltInType true

######### !graphqlName group

######### !graphqlTypeFlat String

######### !graphqlTypeShort scalar

####### !!properties data

!name data

!type FilterData!



######## !context

######### !graphqlBuiltInType false

######### !graphqlName data

######### !graphqlTypeFlat FilterData

######### !graphqlTypeShort object

######## !!properties string

!name string

!type FilterDataString



######### !context

########## !graphqlBuiltInType false

########## !graphqlName string

########## !graphqlTypeFlat FilterDataString

########## !graphqlTypeShort object

######### !!properties value

!name value

!type String



########## !context

########### !graphqlBuiltInType true

########### !graphqlName value

########### !graphqlTypeFlat String

########### !graphqlTypeShort scalar

######### !!properties values

!name values

!type \[String]



########## !context

########### !graphqlBuiltInType true

########### !graphqlName values

########### !graphqlTypeFlat String

########### !graphqlTypeShort scalar

######### !!properties operator

!name operator

!type String!



########## !context

########### !graphqlBuiltInType true

########### !graphqlName operator

########### !graphqlTypeFlat String

########### !graphqlTypeShort scalar

######## !!properties int

!name int

!type FilterDataInt



######### !context

########## !graphqlBuiltInType false

########## !graphqlName int

########## !graphqlTypeFlat FilterDataInt

########## !graphqlTypeShort object

######### !!properties value

!name value

!type Int



########## !context

########### !graphqlBuiltInType true

########### !graphqlName value

########### !graphqlTypeFlat Int

########### !graphqlTypeShort scalar

######### !!properties values

!name values

!type \[Int]



########## !context

########### !graphqlBuiltInType true

########### !graphqlName values

########### !graphqlTypeFlat Int

########### !graphqlTypeShort scalar

######### !!properties operator

!name operator

!type String!



########## !context

########### !graphqlBuiltInType true

########### !graphqlName operator

########### !graphqlTypeFlat String

########### !graphqlTypeShort scalar

######## !!properties bool

!name bool

!type FilterDataBool



######### !context

########## !graphqlBuiltInType false

########## !graphqlName bool

########## !graphqlTypeFlat FilterDataBool

########## !graphqlTypeShort object

######### !!properties value

!name value

!type Boolean



########## !context

########### !graphqlBuiltInType true

########### !graphqlName value

########### !graphqlTypeFlat Boolean

########### !graphqlTypeShort scalar

######### !!properties operator

!name operator

!type String!



########## !context

########### !graphqlBuiltInType true

########### !graphqlName operator

########### !graphqlTypeFlat String

########### !graphqlTypeShort scalar

######## !!properties event

!name event

!type FilterDataEvent



######### !context

########## !graphqlBuiltInType false

########## !graphqlName event

########## !graphqlTypeFlat FilterDataEvent

########## !graphqlTypeShort object

######### !!properties type

!name type

!type String!



########## !context

########### !graphqlBuiltInType true

########### !graphqlName type

########### !graphqlTypeFlat String

########### !graphqlTypeShort scalar

######### !!properties group

!name group

!type FilterDataString



########## !context

########### !graphqlBuiltInType false

########### !graphqlName group

########### !graphqlTypeFlat FilterDataString

########### !graphqlTypeShort object

########## !!properties value

!name value

!type String



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[String]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties element

!name element

!type FilterDataString



########## !context

########### !graphqlBuiltInType false

########### !graphqlName element

########### !graphqlTypeFlat FilterDataString

########### !graphqlTypeShort object

########## !!properties value

!name value

!type String



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[String]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties txt

!name txt

!type FilterDataString



########## !context

########### !graphqlBuiltInType false

########### !graphqlName txt

########### !graphqlTypeFlat FilterDataString

########### !graphqlTypeShort object

########## !!properties value

!name value

!type String



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[String]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties element_path

!name element\_path

!type FilterDataString



########## !context

########### !graphqlBuiltInType false

########### !graphqlName element_path

########### !graphqlTypeFlat FilterDataString

########### !graphqlTypeShort object

########## !!properties value

!name value

!type String



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[String]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties location

!name location

!type FilterDataString



########## !context

########### !graphqlBuiltInType false

########### !graphqlName location

########### !graphqlTypeFlat FilterDataString

########### !graphqlTypeShort object

########## !!properties value

!name value

!type String



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[String]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties value

!name value

!type FilterDataString



########## !context

########### !graphqlBuiltInType false

########### !graphqlName value

########### !graphqlTypeFlat FilterDataString

########### !graphqlTypeShort object

########## !!properties value

!name value

!type String



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[String]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties height

!name height

!type FilterDataInt



########## !context

########### !graphqlBuiltInType false

########### !graphqlName height

########### !graphqlTypeFlat FilterDataInt

########### !graphqlTypeShort object

########## !!properties value

!name value

!type Int



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[Int]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties width

!name width

!type FilterDataInt



########## !context

########### !graphqlBuiltInType false

########### !graphqlName width

########### !graphqlTypeFlat FilterDataInt

########### !graphqlTypeShort object

########## !!properties value

!name value

!type Int



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[Int]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties timestamp

!name timestamp

!type FilterDataInt



########## !context

########### !graphqlBuiltInType false

########### !graphqlName timestamp

########### !graphqlTypeFlat FilterDataInt

########### !graphqlTypeShort object

########## !!properties value

!name value

!type Int



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[Int]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties x

!name x

!type FilterDataInt



########## !context

########### !graphqlBuiltInType false

########### !graphqlName x

########### !graphqlTypeFlat FilterDataInt

########### !graphqlTypeShort object

########## !!properties value

!name value

!type Int



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[Int]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties y

!name y

!type FilterDataInt



########## !context

########### !graphqlBuiltInType false

########### !graphqlName y

########### !graphqlTypeFlat FilterDataInt

########### !graphqlTypeShort object

########## !!properties value

!name value

!type Int



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[Int]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######## !!properties param

!name param

!type FilterDataParam



######### !context

########## !graphqlBuiltInType false

########## !graphqlName param

########## !graphqlTypeFlat FilterDataParam

########## !graphqlTypeShort object

######### !!properties name

!name name

!type String!



########## !context

########### !graphqlBuiltInType true

########### !graphqlName name

########### !graphqlTypeFlat String

########### !graphqlTypeShort scalar

######### !!properties value

!name value

!type FilterDataString



########## !context

########### !graphqlBuiltInType false

########### !graphqlName value

########### !graphqlTypeFlat FilterDataString

########### !graphqlTypeShort object

########## !!properties value

!name value

!type String



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[String]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######## !!properties event_properties

!name event\_properties

!type \[FilterDataCustomEventProperty]



######### !context

########## !graphqlBuiltInType false

########## !graphqlName event_properties

########## !graphqlTypeFlat FilterDataCustomEventProperty

########## !graphqlTypeShort object

######### !!properties name

!name name

!type String!



########## !context

########### !graphqlBuiltInType true

########### !graphqlName name

########### !graphqlTypeFlat String

########### !graphqlTypeShort scalar

######### !!properties value_str

!name value\_str

!type FilterDataString



########## !context

########### !graphqlBuiltInType false

########### !graphqlName value_str

########### !graphqlTypeFlat FilterDataString

########### !graphqlTypeShort object

########## !!properties value

!name value

!type String



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[String]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties value_bool

!name value\_bool

!type FilterDataBool



########## !context

########### !graphqlBuiltInType false

########### !graphqlName value_bool

########### !graphqlTypeFlat FilterDataBool

########### !graphqlTypeShort object

########## !!properties value

!name value

!type Boolean



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat Boolean

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties value_int

!name value\_int

!type FilterDataInt



########## !context

########### !graphqlBuiltInType false

########### !graphqlName value_int

########### !graphqlTypeFlat FilterDataInt

########### !graphqlTypeShort object

########## !!properties value

!name value

!type Int



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[Int]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties value_float

!name value\_float

!type FilterDataFloat



########## !context

########### !graphqlBuiltInType false

########### !graphqlName value_float

########### !graphqlTypeFlat FilterDataFloat

########### !graphqlTypeShort object

########## !!properties value

!name value

!type Float!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat Float

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[Float!]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat Float

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

####### !!properties defined_event_id

!name defined\_event\_id

!type String



######## !context

######### !graphqlBuiltInType true

######### !graphqlName defined_event_id

######### !graphqlTypeFlat String

######### !graphqlTypeShort scalar

####### !!properties stable_id

!name stable\_id

!type String



######## !context

######### !graphqlBuiltInType true

######### !graphqlName stable_id

######### !graphqlTypeFlat String

######### !graphqlTypeShort scalar

####### !!properties parent_filter_stable_id

!name parent\_filter\_stable\_id

!type String



######## !context

######### !graphqlBuiltInType true

######### !graphqlName parent_filter_stable_id

######### !graphqlTypeFlat String

######### !graphqlTypeShort scalar

###### !!properties should

!name should

!type \[Filter]!



####### !context

######## !graphqlBuiltInType false

######## !graphqlName should

######## !graphqlTypeFlat Filter

######## !graphqlTypeShort object

####### !!properties name

!name name

!type String!



######## !context

######### !graphqlBuiltInType true

######### !graphqlName name

######### !graphqlTypeFlat String

######### !graphqlTypeShort scalar

####### !!properties unit

!name unit

!type String



######## !context

######### !graphqlBuiltInType true

######### !graphqlName unit

######### !graphqlTypeFlat String

######### !graphqlTypeShort scalar

####### !!properties group

!name group

!type String



######## !context

######### !graphqlBuiltInType true

######### !graphqlName group

######### !graphqlTypeFlat String

######### !graphqlTypeShort scalar

####### !!properties data

!name data

!type FilterData!



######## !context

######### !graphqlBuiltInType false

######### !graphqlName data

######### !graphqlTypeFlat FilterData

######### !graphqlTypeShort object

######## !!properties string

!name string

!type FilterDataString



######### !context

########## !graphqlBuiltInType false

########## !graphqlName string

########## !graphqlTypeFlat FilterDataString

########## !graphqlTypeShort object

######### !!properties value

!name value

!type String



########## !context

########### !graphqlBuiltInType true

########### !graphqlName value

########### !graphqlTypeFlat String

########### !graphqlTypeShort scalar

######### !!properties values

!name values

!type \[String]



########## !context

########### !graphqlBuiltInType true

########### !graphqlName values

########### !graphqlTypeFlat String

########### !graphqlTypeShort scalar

######### !!properties operator

!name operator

!type String!



########## !context

########### !graphqlBuiltInType true

########### !graphqlName operator

########### !graphqlTypeFlat String

########### !graphqlTypeShort scalar

######## !!properties int

!name int

!type FilterDataInt



######### !context

########## !graphqlBuiltInType false

########## !graphqlName int

########## !graphqlTypeFlat FilterDataInt

########## !graphqlTypeShort object

######### !!properties value

!name value

!type Int



########## !context

########### !graphqlBuiltInType true

########### !graphqlName value

########### !graphqlTypeFlat Int

########### !graphqlTypeShort scalar

######### !!properties values

!name values

!type \[Int]



########## !context

########### !graphqlBuiltInType true

########### !graphqlName values

########### !graphqlTypeFlat Int

########### !graphqlTypeShort scalar

######### !!properties operator

!name operator

!type String!



########## !context

########### !graphqlBuiltInType true

########### !graphqlName operator

########### !graphqlTypeFlat String

########### !graphqlTypeShort scalar

######## !!properties bool

!name bool

!type FilterDataBool



######### !context

########## !graphqlBuiltInType false

########## !graphqlName bool

########## !graphqlTypeFlat FilterDataBool

########## !graphqlTypeShort object

######### !!properties value

!name value

!type Boolean



########## !context

########### !graphqlBuiltInType true

########### !graphqlName value

########### !graphqlTypeFlat Boolean

########### !graphqlTypeShort scalar

######### !!properties operator

!name operator

!type String!



########## !context

########### !graphqlBuiltInType true

########### !graphqlName operator

########### !graphqlTypeFlat String

########### !graphqlTypeShort scalar

######## !!properties event

!name event

!type FilterDataEvent



######### !context

########## !graphqlBuiltInType false

########## !graphqlName event

########## !graphqlTypeFlat FilterDataEvent

########## !graphqlTypeShort object

######### !!properties type

!name type

!type String!



########## !context

########### !graphqlBuiltInType true

########### !graphqlName type

########### !graphqlTypeFlat String

########### !graphqlTypeShort scalar

######### !!properties group

!name group

!type FilterDataString



########## !context

########### !graphqlBuiltInType false

########### !graphqlName group

########### !graphqlTypeFlat FilterDataString

########### !graphqlTypeShort object

########## !!properties value

!name value

!type String



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[String]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties element

!name element

!type FilterDataString



########## !context

########### !graphqlBuiltInType false

########### !graphqlName element

########### !graphqlTypeFlat FilterDataString

########### !graphqlTypeShort object

########## !!properties value

!name value

!type String



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[String]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties txt

!name txt

!type FilterDataString



########## !context

########### !graphqlBuiltInType false

########### !graphqlName txt

########### !graphqlTypeFlat FilterDataString

########### !graphqlTypeShort object

########## !!properties value

!name value

!type String



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[String]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties element_path

!name element\_path

!type FilterDataString



########## !context

########### !graphqlBuiltInType false

########### !graphqlName element_path

########### !graphqlTypeFlat FilterDataString

########### !graphqlTypeShort object

########## !!properties value

!name value

!type String



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[String]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties location

!name location

!type FilterDataString



########## !context

########### !graphqlBuiltInType false

########### !graphqlName location

########### !graphqlTypeFlat FilterDataString

########### !graphqlTypeShort object

########## !!properties value

!name value

!type String



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[String]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties value

!name value

!type FilterDataString



########## !context

########### !graphqlBuiltInType false

########### !graphqlName value

########### !graphqlTypeFlat FilterDataString

########### !graphqlTypeShort object

########## !!properties value

!name value

!type String



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[String]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties height

!name height

!type FilterDataInt



########## !context

########### !graphqlBuiltInType false

########### !graphqlName height

########### !graphqlTypeFlat FilterDataInt

########### !graphqlTypeShort object

########## !!properties value

!name value

!type Int



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[Int]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties width

!name width

!type FilterDataInt



########## !context

########### !graphqlBuiltInType false

########### !graphqlName width

########### !graphqlTypeFlat FilterDataInt

########### !graphqlTypeShort object

########## !!properties value

!name value

!type Int



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[Int]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties timestamp

!name timestamp

!type FilterDataInt



########## !context

########### !graphqlBuiltInType false

########### !graphqlName timestamp

########### !graphqlTypeFlat FilterDataInt

########### !graphqlTypeShort object

########## !!properties value

!name value

!type Int



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[Int]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties x

!name x

!type FilterDataInt



########## !context

########### !graphqlBuiltInType false

########### !graphqlName x

########### !graphqlTypeFlat FilterDataInt

########### !graphqlTypeShort object

########## !!properties value

!name value

!type Int



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[Int]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties y

!name y

!type FilterDataInt



########## !context

########### !graphqlBuiltInType false

########### !graphqlName y

########### !graphqlTypeFlat FilterDataInt

########### !graphqlTypeShort object

########## !!properties value

!name value

!type Int



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[Int]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######## !!properties param

!name param

!type FilterDataParam



######### !context

########## !graphqlBuiltInType false

########## !graphqlName param

########## !graphqlTypeFlat FilterDataParam

########## !graphqlTypeShort object

######### !!properties name

!name name

!type String!



########## !context

########### !graphqlBuiltInType true

########### !graphqlName name

########### !graphqlTypeFlat String

########### !graphqlTypeShort scalar

######### !!properties value

!name value

!type FilterDataString



########## !context

########### !graphqlBuiltInType false

########### !graphqlName value

########### !graphqlTypeFlat FilterDataString

########### !graphqlTypeShort object

########## !!properties value

!name value

!type String



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[String]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######## !!properties event_properties

!name event\_properties

!type \[FilterDataCustomEventProperty]



######### !context

########## !graphqlBuiltInType false

########## !graphqlName event_properties

########## !graphqlTypeFlat FilterDataCustomEventProperty

########## !graphqlTypeShort object

######### !!properties name

!name name

!type String!



########## !context

########### !graphqlBuiltInType true

########### !graphqlName name

########### !graphqlTypeFlat String

########### !graphqlTypeShort scalar

######### !!properties value_str

!name value\_str

!type FilterDataString



########## !context

########### !graphqlBuiltInType false

########### !graphqlName value_str

########### !graphqlTypeFlat FilterDataString

########### !graphqlTypeShort object

########## !!properties value

!name value

!type String



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[String]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties value_bool

!name value\_bool

!type FilterDataBool



########## !context

########### !graphqlBuiltInType false

########### !graphqlName value_bool

########### !graphqlTypeFlat FilterDataBool

########### !graphqlTypeShort object

########## !!properties value

!name value

!type Boolean



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat Boolean

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties value_int

!name value\_int

!type FilterDataInt



########## !context

########### !graphqlBuiltInType false

########### !graphqlName value_int

########### !graphqlTypeFlat FilterDataInt

########### !graphqlTypeShort object

########## !!properties value

!name value

!type Int



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[Int]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties value_float

!name value\_float

!type FilterDataFloat



########## !context

########### !graphqlBuiltInType false

########### !graphqlName value_float

########### !graphqlTypeFlat FilterDataFloat

########### !graphqlTypeShort object

########## !!properties value

!name value

!type Float!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat Float

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[Float!]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat Float

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

####### !!properties defined_event_id

!name defined\_event\_id

!type String



######## !context

######### !graphqlBuiltInType true

######### !graphqlName defined_event_id

######### !graphqlTypeFlat String

######### !graphqlTypeShort scalar

####### !!properties stable_id

!name stable\_id

!type String



######## !context

######### !graphqlBuiltInType true

######### !graphqlName stable_id

######### !graphqlTypeFlat String

######### !graphqlTypeShort scalar

####### !!properties parent_filter_stable_id

!name parent\_filter\_stable\_id

!type String



######## !context

######### !graphqlBuiltInType true

######### !graphqlName parent_filter_stable_id

######### !graphqlTypeFlat String

######### !graphqlTypeShort scalar

###### !!properties must_not

!name must\_not

!type \[Filter]!



####### !context

######## !graphqlBuiltInType false

######## !graphqlName must_not

######## !graphqlTypeFlat Filter

######## !graphqlTypeShort object

####### !!properties name

!name name

!type String!



######## !context

######### !graphqlBuiltInType true

######### !graphqlName name

######### !graphqlTypeFlat String

######### !graphqlTypeShort scalar

####### !!properties unit

!name unit

!type String



######## !context

######### !graphqlBuiltInType true

######### !graphqlName unit

######### !graphqlTypeFlat String

######### !graphqlTypeShort scalar

####### !!properties group

!name group

!type String



######## !context

######### !graphqlBuiltInType true

######### !graphqlName group

######### !graphqlTypeFlat String

######### !graphqlTypeShort scalar

####### !!properties data

!name data

!type FilterData!



######## !context

######### !graphqlBuiltInType false

######### !graphqlName data

######### !graphqlTypeFlat FilterData

######### !graphqlTypeShort object

######## !!properties string

!name string

!type FilterDataString



######### !context

########## !graphqlBuiltInType false

########## !graphqlName string

########## !graphqlTypeFlat FilterDataString

########## !graphqlTypeShort object

######### !!properties value

!name value

!type String



########## !context

########### !graphqlBuiltInType true

########### !graphqlName value

########### !graphqlTypeFlat String

########### !graphqlTypeShort scalar

######### !!properties values

!name values

!type \[String]



########## !context

########### !graphqlBuiltInType true

########### !graphqlName values

########### !graphqlTypeFlat String

########### !graphqlTypeShort scalar

######### !!properties operator

!name operator

!type String!



########## !context

########### !graphqlBuiltInType true

########### !graphqlName operator

########### !graphqlTypeFlat String

########### !graphqlTypeShort scalar

######## !!properties int

!name int

!type FilterDataInt



######### !context

########## !graphqlBuiltInType false

########## !graphqlName int

########## !graphqlTypeFlat FilterDataInt

########## !graphqlTypeShort object

######### !!properties value

!name value

!type Int



########## !context

########### !graphqlBuiltInType true

########### !graphqlName value

########### !graphqlTypeFlat Int

########### !graphqlTypeShort scalar

######### !!properties values

!name values

!type \[Int]



########## !context

########### !graphqlBuiltInType true

########### !graphqlName values

########### !graphqlTypeFlat Int

########### !graphqlTypeShort scalar

######### !!properties operator

!name operator

!type String!



########## !context

########### !graphqlBuiltInType true

########### !graphqlName operator

########### !graphqlTypeFlat String

########### !graphqlTypeShort scalar

######## !!properties bool

!name bool

!type FilterDataBool



######### !context

########## !graphqlBuiltInType false

########## !graphqlName bool

########## !graphqlTypeFlat FilterDataBool

########## !graphqlTypeShort object

######### !!properties value

!name value

!type Boolean



########## !context

########### !graphqlBuiltInType true

########### !graphqlName value

########### !graphqlTypeFlat Boolean

########### !graphqlTypeShort scalar

######### !!properties operator

!name operator

!type String!



########## !context

########### !graphqlBuiltInType true

########### !graphqlName operator

########### !graphqlTypeFlat String

########### !graphqlTypeShort scalar

######## !!properties event

!name event

!type FilterDataEvent



######### !context

########## !graphqlBuiltInType false

########## !graphqlName event

########## !graphqlTypeFlat FilterDataEvent

########## !graphqlTypeShort object

######### !!properties type

!name type

!type String!



########## !context

########### !graphqlBuiltInType true

########### !graphqlName type

########### !graphqlTypeFlat String

########### !graphqlTypeShort scalar

######### !!properties group

!name group

!type FilterDataString



########## !context

########### !graphqlBuiltInType false

########### !graphqlName group

########### !graphqlTypeFlat FilterDataString

########### !graphqlTypeShort object

########## !!properties value

!name value

!type String



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[String]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties element

!name element

!type FilterDataString



########## !context

########### !graphqlBuiltInType false

########### !graphqlName element

########### !graphqlTypeFlat FilterDataString

########### !graphqlTypeShort object

########## !!properties value

!name value

!type String



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[String]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties txt

!name txt

!type FilterDataString



########## !context

########### !graphqlBuiltInType false

########### !graphqlName txt

########### !graphqlTypeFlat FilterDataString

########### !graphqlTypeShort object

########## !!properties value

!name value

!type String



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[String]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties element_path

!name element\_path

!type FilterDataString



########## !context

########### !graphqlBuiltInType false

########### !graphqlName element_path

########### !graphqlTypeFlat FilterDataString

########### !graphqlTypeShort object

########## !!properties value

!name value

!type String



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[String]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties location

!name location

!type FilterDataString



########## !context

########### !graphqlBuiltInType false

########### !graphqlName location

########### !graphqlTypeFlat FilterDataString

########### !graphqlTypeShort object

########## !!properties value

!name value

!type String



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[String]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties value

!name value

!type FilterDataString



########## !context

########### !graphqlBuiltInType false

########### !graphqlName value

########### !graphqlTypeFlat FilterDataString

########### !graphqlTypeShort object

########## !!properties value

!name value

!type String



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[String]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties height

!name height

!type FilterDataInt



########## !context

########### !graphqlBuiltInType false

########### !graphqlName height

########### !graphqlTypeFlat FilterDataInt

########### !graphqlTypeShort object

########## !!properties value

!name value

!type Int



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[Int]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties width

!name width

!type FilterDataInt



########## !context

########### !graphqlBuiltInType false

########### !graphqlName width

########### !graphqlTypeFlat FilterDataInt

########### !graphqlTypeShort object

########## !!properties value

!name value

!type Int



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[Int]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties timestamp

!name timestamp

!type FilterDataInt



########## !context

########### !graphqlBuiltInType false

########### !graphqlName timestamp

########### !graphqlTypeFlat FilterDataInt

########### !graphqlTypeShort object

########## !!properties value

!name value

!type Int



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[Int]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties x

!name x

!type FilterDataInt



########## !context

########### !graphqlBuiltInType false

########### !graphqlName x

########### !graphqlTypeFlat FilterDataInt

########### !graphqlTypeShort object

########## !!properties value

!name value

!type Int



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[Int]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties y

!name y

!type FilterDataInt



########## !context

########### !graphqlBuiltInType false

########### !graphqlName y

########### !graphqlTypeFlat FilterDataInt

########### !graphqlTypeShort object

########## !!properties value

!name value

!type Int



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[Int]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######## !!properties param

!name param

!type FilterDataParam



######### !context

########## !graphqlBuiltInType false

########## !graphqlName param

########## !graphqlTypeFlat FilterDataParam

########## !graphqlTypeShort object

######### !!properties name

!name name

!type String!



########## !context

########### !graphqlBuiltInType true

########### !graphqlName name

########### !graphqlTypeFlat String

########### !graphqlTypeShort scalar

######### !!properties value

!name value

!type FilterDataString



########## !context

########### !graphqlBuiltInType false

########### !graphqlName value

########### !graphqlTypeFlat FilterDataString

########### !graphqlTypeShort object

########## !!properties value

!name value

!type String



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[String]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######## !!properties event_properties

!name event\_properties

!type \[FilterDataCustomEventProperty]



######### !context

########## !graphqlBuiltInType false

########## !graphqlName event_properties

########## !graphqlTypeFlat FilterDataCustomEventProperty

########## !graphqlTypeShort object

######### !!properties name

!name name

!type String!



########## !context

########### !graphqlBuiltInType true

########### !graphqlName name

########### !graphqlTypeFlat String

########### !graphqlTypeShort scalar

######### !!properties value_str

!name value\_str

!type FilterDataString



########## !context

########### !graphqlBuiltInType false

########### !graphqlName value_str

########### !graphqlTypeFlat FilterDataString

########### !graphqlTypeShort object

########## !!properties value

!name value

!type String



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[String]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties value_bool

!name value\_bool

!type FilterDataBool



########## !context

########### !graphqlBuiltInType false

########### !graphqlName value_bool

########### !graphqlTypeFlat FilterDataBool

########### !graphqlTypeShort object

########## !!properties value

!name value

!type Boolean



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat Boolean

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties value_int

!name value\_int

!type FilterDataInt



########## !context

########### !graphqlBuiltInType false

########### !graphqlName value_int

########### !graphqlTypeFlat FilterDataInt

########### !graphqlTypeShort object

########## !!properties value

!name value

!type Int



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[Int]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties value_float

!name value\_float

!type FilterDataFloat



########## !context

########### !graphqlBuiltInType false

########### !graphqlName value_float

########### !graphqlTypeFlat FilterDataFloat

########### !graphqlTypeShort object

########## !!properties value

!name value

!type Float!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat Float

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[Float!]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat Float

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

####### !!properties defined_event_id

!name defined\_event\_id

!type String



######## !context

######### !graphqlBuiltInType true

######### !graphqlName defined_event_id

######### !graphqlTypeFlat String

######### !graphqlTypeShort scalar

####### !!properties stable_id

!name stable\_id

!type String



######## !context

######### !graphqlBuiltInType true

######### !graphqlName stable_id

######### !graphqlTypeFlat String

######### !graphqlTypeShort scalar

####### !!properties parent_filter_stable_id

!name parent\_filter\_stable\_id

!type String



######## !context

######### !graphqlBuiltInType true

######### !graphqlName parent_filter_stable_id

######### !graphqlTypeFlat String

######### !graphqlTypeShort scalar

#### !!properties is_favourite

!name is\_favourite

!type Boolean!



##### !context

###### !graphqlBuiltInType true

###### !graphqlName is_favourite

###### !graphqlTypeFlat Boolean

###### !graphqlTypeShort scalar

#### !!properties is_owner

!name is\_owner

!type Boolean!



##### !context

###### !graphqlBuiltInType true

###### !graphqlName is_owner

###### !graphqlTypeFlat Boolean

###### !graphqlTypeShort scalar

#### !!properties is_public

!name is\_public

!type Boolean!



##### !context

###### !graphqlBuiltInType true

###### !graphqlName is_public

###### !graphqlTypeFlat Boolean

###### !graphqlTypeShort scalar
