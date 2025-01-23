---
title: Create Funnel
---
## !description

Create a new funnel

## !!references funnelCreate

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



##### !!properties name

!name name

!type String!



##### !!properties description

!name description

!type String



##### !!properties website_id

!name website\_id

!type ID



##### !!properties segment_id

!name segment\_id

!type String!



##### !!properties compute

!name compute

!type FunnelComputeWriteInput!



###### !!properties type

!name type

!type String



###### !!properties date_range

!name date\_range

!type DateRangeInput!



####### !!properties from

!name from

!type RelativeDate



####### !!properties to

!name to

!type RelativeDate



###### !!properties steps

!name steps

!type \[FunnelStepInput]!



####### !!properties name

!name name

!type String



####### !!properties filters

!name filters

!type FiltersInput



######## !!properties must

!name must

!type \[FilterInput]



######### !!properties name

!name name

!type String!



######### !!properties unit

!name unit

!type String



######### !!properties group

!name group

!type String



######### !!properties data

!name data

!type FilterDataInput!



########## !!properties string

!name string

!type FilterDataStringInput



########### !!properties value

!name value

!type String



########### !!properties values

!name values

!type \[String!]



########### !!properties operator

!name operator

!type String!



########## !!properties int

!name int

!type FilterDataIntInput



########### !!properties value

!name value

!type Int



########### !!properties values

!name values

!type \[Int!]



########### !!properties operator

!name operator

!type String!



########## !!properties bool

!name bool

!type FilterDataBoolInput



########### !!properties value

!name value

!type Boolean!



########### !!properties operator

!name operator

!type String!



########## !!properties event

!name event

!type FilterDataEventInput



########### !!properties type

!name type

!type String!



########### !!properties group

!name group

!type FilterDataStringInput



############ !!properties value

!name value

!type String



############ !!properties values

!name values

!type \[String!]



############ !!properties operator

!name operator

!type String!



########### !!properties element

!name element

!type FilterDataStringInput



############ !!properties value

!name value

!type String



############ !!properties values

!name values

!type \[String!]



############ !!properties operator

!name operator

!type String!



########### !!properties txt

!name txt

!type FilterDataStringInput



############ !!properties value

!name value

!type String



############ !!properties values

!name values

!type \[String!]



############ !!properties operator

!name operator

!type String!



########### !!properties element_path

!name element\_path

!type FilterDataStringInput



############ !!properties value

!name value

!type String



############ !!properties values

!name values

!type \[String!]



############ !!properties operator

!name operator

!type String!



########### !!properties location

!name location

!type FilterDataStringInput



############ !!properties value

!name value

!type String



############ !!properties values

!name values

!type \[String!]



############ !!properties operator

!name operator

!type String!



########### !!properties value

!name value

!type FilterDataStringInput



############ !!properties value

!name value

!type String



############ !!properties values

!name values

!type \[String!]



############ !!properties operator

!name operator

!type String!



########### !!properties height

!name height

!type FilterDataIntInput



############ !!properties value

!name value

!type Int



############ !!properties values

!name values

!type \[Int!]



############ !!properties operator

!name operator

!type String!



########### !!properties width

!name width

!type FilterDataIntInput



############ !!properties value

!name value

!type Int



############ !!properties values

!name values

!type \[Int!]



############ !!properties operator

!name operator

!type String!



########### !!properties timestamp

!name timestamp

!type FilterDataIntInput



############ !!properties value

!name value

!type Int



############ !!properties values

!name values

!type \[Int!]



############ !!properties operator

!name operator

!type String!



########### !!properties x

!name x

!type FilterDataIntInput



############ !!properties value

!name value

!type Int



############ !!properties values

!name values

!type \[Int!]



############ !!properties operator

!name operator

!type String!



########### !!properties y

!name y

!type FilterDataIntInput



############ !!properties value

!name value

!type Int



############ !!properties values

!name values

!type \[Int!]



############ !!properties operator

!name operator

!type String!



########## !!properties param

!name param

!type FilterDataParamInput



########### !!properties name

!name name

!type String!



########### !!properties value

!name value

!type FilterDataStringInput



############ !!properties value

!name value

!type String



############ !!properties values

!name values

!type \[String!]



############ !!properties operator

!name operator

!type String!



########## !!properties event_properties

!name event\_properties

!type \[FilterDataCustomEventPropertyInput]



########### !!properties name

!name name

!type String!



########### !!properties value_str

!name value\_str

!type FilterDataStringInput



############ !!properties value

!name value

!type String



############ !!properties values

!name values

!type \[String!]



############ !!properties operator

!name operator

!type String!



########### !!properties value_int

!name value\_int

!type FilterDataIntInput



############ !!properties value

!name value

!type Int



############ !!properties values

!name values

!type \[Int!]



############ !!properties operator

!name operator

!type String!



########### !!properties value_bool

!name value\_bool

!type FilterDataBoolInput



############ !!properties value

!name value

!type Boolean!



############ !!properties operator

!name operator

!type String!



########### !!properties value_float

!name value\_float

!type FilterDataFloatInput



############ !!properties values

!name values

!type \[Float]



############ !!properties value

!name value

!type Float



############ !!properties operator

!name operator

!type String!



######### !!properties defined_event_id

!name defined\_event\_id

!type String



######### !!properties stable_id

!name stable\_id

!type String



######### !!properties parent_filter_stable_id

!name parent\_filter\_stable\_id

!type String



######## !!properties should

!name should

!type \[FilterInput]



######### !!properties name

!name name

!type String!



######### !!properties unit

!name unit

!type String



######### !!properties group

!name group

!type String



######### !!properties data

!name data

!type FilterDataInput!



########## !!properties string

!name string

!type FilterDataStringInput



########### !!properties value

!name value

!type String



########### !!properties values

!name values

!type \[String!]



########### !!properties operator

!name operator

!type String!



########## !!properties int

!name int

!type FilterDataIntInput



########### !!properties value

!name value

!type Int



########### !!properties values

!name values

!type \[Int!]



########### !!properties operator

!name operator

!type String!



########## !!properties bool

!name bool

!type FilterDataBoolInput



########### !!properties value

!name value

!type Boolean!



########### !!properties operator

!name operator

!type String!



########## !!properties event

!name event

!type FilterDataEventInput



########### !!properties type

!name type

!type String!



########### !!properties group

!name group

!type FilterDataStringInput



############ !!properties value

!name value

!type String



############ !!properties values

!name values

!type \[String!]



############ !!properties operator

!name operator

!type String!



########### !!properties element

!name element

!type FilterDataStringInput



############ !!properties value

!name value

!type String



############ !!properties values

!name values

!type \[String!]



############ !!properties operator

!name operator

!type String!



########### !!properties txt

!name txt

!type FilterDataStringInput



############ !!properties value

!name value

!type String



############ !!properties values

!name values

!type \[String!]



############ !!properties operator

!name operator

!type String!



########### !!properties element_path

!name element\_path

!type FilterDataStringInput



############ !!properties value

!name value

!type String



############ !!properties values

!name values

!type \[String!]



############ !!properties operator

!name operator

!type String!



########### !!properties location

!name location

!type FilterDataStringInput



############ !!properties value

!name value

!type String



############ !!properties values

!name values

!type \[String!]



############ !!properties operator

!name operator

!type String!



########### !!properties value

!name value

!type FilterDataStringInput



############ !!properties value

!name value

!type String



############ !!properties values

!name values

!type \[String!]



############ !!properties operator

!name operator

!type String!



########### !!properties height

!name height

!type FilterDataIntInput



############ !!properties value

!name value

!type Int



############ !!properties values

!name values

!type \[Int!]



############ !!properties operator

!name operator

!type String!



########### !!properties width

!name width

!type FilterDataIntInput



############ !!properties value

!name value

!type Int



############ !!properties values

!name values

!type \[Int!]



############ !!properties operator

!name operator

!type String!



########### !!properties timestamp

!name timestamp

!type FilterDataIntInput



############ !!properties value

!name value

!type Int



############ !!properties values

!name values

!type \[Int!]



############ !!properties operator

!name operator

!type String!



########### !!properties x

!name x

!type FilterDataIntInput



############ !!properties value

!name value

!type Int



############ !!properties values

!name values

!type \[Int!]



############ !!properties operator

!name operator

!type String!



########### !!properties y

!name y

!type FilterDataIntInput



############ !!properties value

!name value

!type Int



############ !!properties values

!name values

!type \[Int!]



############ !!properties operator

!name operator

!type String!



########## !!properties param

!name param

!type FilterDataParamInput



########### !!properties name

!name name

!type String!



########### !!properties value

!name value

!type FilterDataStringInput



############ !!properties value

!name value

!type String



############ !!properties values

!name values

!type \[String!]



############ !!properties operator

!name operator

!type String!



########## !!properties event_properties

!name event\_properties

!type \[FilterDataCustomEventPropertyInput]



########### !!properties name

!name name

!type String!



########### !!properties value_str

!name value\_str

!type FilterDataStringInput



############ !!properties value

!name value

!type String



############ !!properties values

!name values

!type \[String!]



############ !!properties operator

!name operator

!type String!



########### !!properties value_int

!name value\_int

!type FilterDataIntInput



############ !!properties value

!name value

!type Int



############ !!properties values

!name values

!type \[Int!]



############ !!properties operator

!name operator

!type String!



########### !!properties value_bool

!name value\_bool

!type FilterDataBoolInput



############ !!properties value

!name value

!type Boolean!



############ !!properties operator

!name operator

!type String!



########### !!properties value_float

!name value\_float

!type FilterDataFloatInput



############ !!properties values

!name values

!type \[Float]



############ !!properties value

!name value

!type Float



############ !!properties operator

!name operator

!type String!



######### !!properties defined_event_id

!name defined\_event\_id

!type String



######### !!properties stable_id

!name stable\_id

!type String



######### !!properties parent_filter_stable_id

!name parent\_filter\_stable\_id

!type String



######## !!properties must_not

!name must\_not

!type \[FilterInput]



######### !!properties name

!name name

!type String!



######### !!properties unit

!name unit

!type String



######### !!properties group

!name group

!type String



######### !!properties data

!name data

!type FilterDataInput!



########## !!properties string

!name string

!type FilterDataStringInput



########### !!properties value

!name value

!type String



########### !!properties values

!name values

!type \[String!]



########### !!properties operator

!name operator

!type String!



########## !!properties int

!name int

!type FilterDataIntInput



########### !!properties value

!name value

!type Int



########### !!properties values

!name values

!type \[Int!]



########### !!properties operator

!name operator

!type String!



########## !!properties bool

!name bool

!type FilterDataBoolInput



########### !!properties value

!name value

!type Boolean!



########### !!properties operator

!name operator

!type String!



########## !!properties event

!name event

!type FilterDataEventInput



########### !!properties type

!name type

!type String!



########### !!properties group

!name group

!type FilterDataStringInput



############ !!properties value

!name value

!type String



############ !!properties values

!name values

!type \[String!]



############ !!properties operator

!name operator

!type String!



########### !!properties element

!name element

!type FilterDataStringInput



############ !!properties value

!name value

!type String



############ !!properties values

!name values

!type \[String!]



############ !!properties operator

!name operator

!type String!



########### !!properties txt

!name txt

!type FilterDataStringInput



############ !!properties value

!name value

!type String



############ !!properties values

!name values

!type \[String!]



############ !!properties operator

!name operator

!type String!



########### !!properties element_path

!name element\_path

!type FilterDataStringInput



############ !!properties value

!name value

!type String



############ !!properties values

!name values

!type \[String!]



############ !!properties operator

!name operator

!type String!



########### !!properties location

!name location

!type FilterDataStringInput



############ !!properties value

!name value

!type String



############ !!properties values

!name values

!type \[String!]



############ !!properties operator

!name operator

!type String!



########### !!properties value

!name value

!type FilterDataStringInput



############ !!properties value

!name value

!type String



############ !!properties values

!name values

!type \[String!]



############ !!properties operator

!name operator

!type String!



########### !!properties height

!name height

!type FilterDataIntInput



############ !!properties value

!name value

!type Int



############ !!properties values

!name values

!type \[Int!]



############ !!properties operator

!name operator

!type String!



########### !!properties width

!name width

!type FilterDataIntInput



############ !!properties value

!name value

!type Int



############ !!properties values

!name values

!type \[Int!]



############ !!properties operator

!name operator

!type String!



########### !!properties timestamp

!name timestamp

!type FilterDataIntInput



############ !!properties value

!name value

!type Int



############ !!properties values

!name values

!type \[Int!]



############ !!properties operator

!name operator

!type String!



########### !!properties x

!name x

!type FilterDataIntInput



############ !!properties value

!name value

!type Int



############ !!properties values

!name values

!type \[Int!]



############ !!properties operator

!name operator

!type String!



########### !!properties y

!name y

!type FilterDataIntInput



############ !!properties value

!name value

!type Int



############ !!properties values

!name values

!type \[Int!]



############ !!properties operator

!name operator

!type String!



########## !!properties param

!name param

!type FilterDataParamInput



########### !!properties name

!name name

!type String!



########### !!properties value

!name value

!type FilterDataStringInput



############ !!properties value

!name value

!type String



############ !!properties values

!name values

!type \[String!]



############ !!properties operator

!name operator

!type String!



########## !!properties event_properties

!name event\_properties

!type \[FilterDataCustomEventPropertyInput]



########### !!properties name

!name name

!type String!



########### !!properties value_str

!name value\_str

!type FilterDataStringInput



############ !!properties value

!name value

!type String



############ !!properties values

!name values

!type \[String!]



############ !!properties operator

!name operator

!type String!



########### !!properties value_int

!name value\_int

!type FilterDataIntInput



############ !!properties value

!name value

!type Int



############ !!properties values

!name values

!type \[Int!]



############ !!properties operator

!name operator

!type String!



########### !!properties value_bool

!name value\_bool

!type FilterDataBoolInput



############ !!properties value

!name value

!type Boolean!



############ !!properties operator

!name operator

!type String!



########### !!properties value_float

!name value\_float

!type FilterDataFloatInput



############ !!properties values

!name values

!type \[Float]



############ !!properties value

!name value

!type Float



############ !!properties operator

!name operator

!type String!



######### !!properties defined_event_id

!name defined\_event\_id

!type String



######### !!properties stable_id

!name stable\_id

!type String



######### !!properties parent_filter_stable_id

!name parent\_filter\_stable\_id

!type String



###### !!properties filters

!name filters

!type FiltersInput



####### !!properties must

!name must

!type \[FilterInput]



######## !!properties name

!name name

!type String!



######## !!properties unit

!name unit

!type String



######## !!properties group

!name group

!type String



######## !!properties data

!name data

!type FilterDataInput!



######### !!properties string

!name string

!type FilterDataStringInput



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String!]



########## !!properties operator

!name operator

!type String!



######### !!properties int

!name int

!type FilterDataIntInput



########## !!properties value

!name value

!type Int



########## !!properties values

!name values

!type \[Int!]



########## !!properties operator

!name operator

!type String!



######### !!properties bool

!name bool

!type FilterDataBoolInput



########## !!properties value

!name value

!type Boolean!



########## !!properties operator

!name operator

!type String!



######### !!properties event

!name event

!type FilterDataEventInput



########## !!properties type

!name type

!type String!



########## !!properties group

!name group

!type FilterDataStringInput



########### !!properties value

!name value

!type String



########### !!properties values

!name values

!type \[String!]



########### !!properties operator

!name operator

!type String!



########## !!properties element

!name element

!type FilterDataStringInput



########### !!properties value

!name value

!type String



########### !!properties values

!name values

!type \[String!]



########### !!properties operator

!name operator

!type String!



########## !!properties txt

!name txt

!type FilterDataStringInput



########### !!properties value

!name value

!type String



########### !!properties values

!name values

!type \[String!]



########### !!properties operator

!name operator

!type String!



########## !!properties element_path

!name element\_path

!type FilterDataStringInput



########### !!properties value

!name value

!type String



########### !!properties values

!name values

!type \[String!]



########### !!properties operator

!name operator

!type String!



########## !!properties location

!name location

!type FilterDataStringInput



########### !!properties value

!name value

!type String



########### !!properties values

!name values

!type \[String!]



########### !!properties operator

!name operator

!type String!



########## !!properties value

!name value

!type FilterDataStringInput



########### !!properties value

!name value

!type String



########### !!properties values

!name values

!type \[String!]



########### !!properties operator

!name operator

!type String!



########## !!properties height

!name height

!type FilterDataIntInput



########### !!properties value

!name value

!type Int



########### !!properties values

!name values

!type \[Int!]



########### !!properties operator

!name operator

!type String!



########## !!properties width

!name width

!type FilterDataIntInput



########### !!properties value

!name value

!type Int



########### !!properties values

!name values

!type \[Int!]



########### !!properties operator

!name operator

!type String!



########## !!properties timestamp

!name timestamp

!type FilterDataIntInput



########### !!properties value

!name value

!type Int



########### !!properties values

!name values

!type \[Int!]



########### !!properties operator

!name operator

!type String!



########## !!properties x

!name x

!type FilterDataIntInput



########### !!properties value

!name value

!type Int



########### !!properties values

!name values

!type \[Int!]



########### !!properties operator

!name operator

!type String!



########## !!properties y

!name y

!type FilterDataIntInput



########### !!properties value

!name value

!type Int



########### !!properties values

!name values

!type \[Int!]



########### !!properties operator

!name operator

!type String!



######### !!properties param

!name param

!type FilterDataParamInput



########## !!properties name

!name name

!type String!



########## !!properties value

!name value

!type FilterDataStringInput



########### !!properties value

!name value

!type String



########### !!properties values

!name values

!type \[String!]



########### !!properties operator

!name operator

!type String!



######### !!properties event_properties

!name event\_properties

!type \[FilterDataCustomEventPropertyInput]



########## !!properties name

!name name

!type String!



########## !!properties value_str

!name value\_str

!type FilterDataStringInput



########### !!properties value

!name value

!type String



########### !!properties values

!name values

!type \[String!]



########### !!properties operator

!name operator

!type String!



########## !!properties value_int

!name value\_int

!type FilterDataIntInput



########### !!properties value

!name value

!type Int



########### !!properties values

!name values

!type \[Int!]



########### !!properties operator

!name operator

!type String!



########## !!properties value_bool

!name value\_bool

!type FilterDataBoolInput



########### !!properties value

!name value

!type Boolean!



########### !!properties operator

!name operator

!type String!



########## !!properties value_float

!name value\_float

!type FilterDataFloatInput



########### !!properties values

!name values

!type \[Float]



########### !!properties value

!name value

!type Float



########### !!properties operator

!name operator

!type String!



######## !!properties defined_event_id

!name defined\_event\_id

!type String



######## !!properties stable_id

!name stable\_id

!type String



######## !!properties parent_filter_stable_id

!name parent\_filter\_stable\_id

!type String



####### !!properties should

!name should

!type \[FilterInput]



######## !!properties name

!name name

!type String!



######## !!properties unit

!name unit

!type String



######## !!properties group

!name group

!type String



######## !!properties data

!name data

!type FilterDataInput!



######### !!properties string

!name string

!type FilterDataStringInput



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String!]



########## !!properties operator

!name operator

!type String!



######### !!properties int

!name int

!type FilterDataIntInput



########## !!properties value

!name value

!type Int



########## !!properties values

!name values

!type \[Int!]



########## !!properties operator

!name operator

!type String!



######### !!properties bool

!name bool

!type FilterDataBoolInput



########## !!properties value

!name value

!type Boolean!



########## !!properties operator

!name operator

!type String!



######### !!properties event

!name event

!type FilterDataEventInput



########## !!properties type

!name type

!type String!



########## !!properties group

!name group

!type FilterDataStringInput



########### !!properties value

!name value

!type String



########### !!properties values

!name values

!type \[String!]



########### !!properties operator

!name operator

!type String!



########## !!properties element

!name element

!type FilterDataStringInput



########### !!properties value

!name value

!type String



########### !!properties values

!name values

!type \[String!]



########### !!properties operator

!name operator

!type String!



########## !!properties txt

!name txt

!type FilterDataStringInput



########### !!properties value

!name value

!type String



########### !!properties values

!name values

!type \[String!]



########### !!properties operator

!name operator

!type String!



########## !!properties element_path

!name element\_path

!type FilterDataStringInput



########### !!properties value

!name value

!type String



########### !!properties values

!name values

!type \[String!]



########### !!properties operator

!name operator

!type String!



########## !!properties location

!name location

!type FilterDataStringInput



########### !!properties value

!name value

!type String



########### !!properties values

!name values

!type \[String!]



########### !!properties operator

!name operator

!type String!



########## !!properties value

!name value

!type FilterDataStringInput



########### !!properties value

!name value

!type String



########### !!properties values

!name values

!type \[String!]



########### !!properties operator

!name operator

!type String!



########## !!properties height

!name height

!type FilterDataIntInput



########### !!properties value

!name value

!type Int



########### !!properties values

!name values

!type \[Int!]



########### !!properties operator

!name operator

!type String!



########## !!properties width

!name width

!type FilterDataIntInput



########### !!properties value

!name value

!type Int



########### !!properties values

!name values

!type \[Int!]



########### !!properties operator

!name operator

!type String!



########## !!properties timestamp

!name timestamp

!type FilterDataIntInput



########### !!properties value

!name value

!type Int



########### !!properties values

!name values

!type \[Int!]



########### !!properties operator

!name operator

!type String!



########## !!properties x

!name x

!type FilterDataIntInput



########### !!properties value

!name value

!type Int



########### !!properties values

!name values

!type \[Int!]



########### !!properties operator

!name operator

!type String!



########## !!properties y

!name y

!type FilterDataIntInput



########### !!properties value

!name value

!type Int



########### !!properties values

!name values

!type \[Int!]



########### !!properties operator

!name operator

!type String!



######### !!properties param

!name param

!type FilterDataParamInput



########## !!properties name

!name name

!type String!



########## !!properties value

!name value

!type FilterDataStringInput



########### !!properties value

!name value

!type String



########### !!properties values

!name values

!type \[String!]



########### !!properties operator

!name operator

!type String!



######### !!properties event_properties

!name event\_properties

!type \[FilterDataCustomEventPropertyInput]



########## !!properties name

!name name

!type String!



########## !!properties value_str

!name value\_str

!type FilterDataStringInput



########### !!properties value

!name value

!type String



########### !!properties values

!name values

!type \[String!]



########### !!properties operator

!name operator

!type String!



########## !!properties value_int

!name value\_int

!type FilterDataIntInput



########### !!properties value

!name value

!type Int



########### !!properties values

!name values

!type \[Int!]



########### !!properties operator

!name operator

!type String!



########## !!properties value_bool

!name value\_bool

!type FilterDataBoolInput



########### !!properties value

!name value

!type Boolean!



########### !!properties operator

!name operator

!type String!



########## !!properties value_float

!name value\_float

!type FilterDataFloatInput



########### !!properties values

!name values

!type \[Float]



########### !!properties value

!name value

!type Float



########### !!properties operator

!name operator

!type String!



######## !!properties defined_event_id

!name defined\_event\_id

!type String



######## !!properties stable_id

!name stable\_id

!type String



######## !!properties parent_filter_stable_id

!name parent\_filter\_stable\_id

!type String



####### !!properties must_not

!name must\_not

!type \[FilterInput]



######## !!properties name

!name name

!type String!



######## !!properties unit

!name unit

!type String



######## !!properties group

!name group

!type String



######## !!properties data

!name data

!type FilterDataInput!



######### !!properties string

!name string

!type FilterDataStringInput



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String!]



########## !!properties operator

!name operator

!type String!



######### !!properties int

!name int

!type FilterDataIntInput



########## !!properties value

!name value

!type Int



########## !!properties values

!name values

!type \[Int!]



########## !!properties operator

!name operator

!type String!



######### !!properties bool

!name bool

!type FilterDataBoolInput



########## !!properties value

!name value

!type Boolean!



########## !!properties operator

!name operator

!type String!



######### !!properties event

!name event

!type FilterDataEventInput



########## !!properties type

!name type

!type String!



########## !!properties group

!name group

!type FilterDataStringInput



########### !!properties value

!name value

!type String



########### !!properties values

!name values

!type \[String!]



########### !!properties operator

!name operator

!type String!



########## !!properties element

!name element

!type FilterDataStringInput



########### !!properties value

!name value

!type String



########### !!properties values

!name values

!type \[String!]



########### !!properties operator

!name operator

!type String!



########## !!properties txt

!name txt

!type FilterDataStringInput



########### !!properties value

!name value

!type String



########### !!properties values

!name values

!type \[String!]



########### !!properties operator

!name operator

!type String!



########## !!properties element_path

!name element\_path

!type FilterDataStringInput



########### !!properties value

!name value

!type String



########### !!properties values

!name values

!type \[String!]



########### !!properties operator

!name operator

!type String!



########## !!properties location

!name location

!type FilterDataStringInput



########### !!properties value

!name value

!type String



########### !!properties values

!name values

!type \[String!]



########### !!properties operator

!name operator

!type String!



########## !!properties value

!name value

!type FilterDataStringInput



########### !!properties value

!name value

!type String



########### !!properties values

!name values

!type \[String!]



########### !!properties operator

!name operator

!type String!



########## !!properties height

!name height

!type FilterDataIntInput



########### !!properties value

!name value

!type Int



########### !!properties values

!name values

!type \[Int!]



########### !!properties operator

!name operator

!type String!



########## !!properties width

!name width

!type FilterDataIntInput



########### !!properties value

!name value

!type Int



########### !!properties values

!name values

!type \[Int!]



########### !!properties operator

!name operator

!type String!



########## !!properties timestamp

!name timestamp

!type FilterDataIntInput



########### !!properties value

!name value

!type Int



########### !!properties values

!name values

!type \[Int!]



########### !!properties operator

!name operator

!type String!



########## !!properties x

!name x

!type FilterDataIntInput



########### !!properties value

!name value

!type Int



########### !!properties values

!name values

!type \[Int!]



########### !!properties operator

!name operator

!type String!



########## !!properties y

!name y

!type FilterDataIntInput



########### !!properties value

!name value

!type Int



########### !!properties values

!name values

!type \[Int!]



########### !!properties operator

!name operator

!type String!



######### !!properties param

!name param

!type FilterDataParamInput



########## !!properties name

!name name

!type String!



########## !!properties value

!name value

!type FilterDataStringInput



########### !!properties value

!name value

!type String



########### !!properties values

!name values

!type \[String!]



########### !!properties operator

!name operator

!type String!



######### !!properties event_properties

!name event\_properties

!type \[FilterDataCustomEventPropertyInput]



########## !!properties name

!name name

!type String!



########## !!properties value_str

!name value\_str

!type FilterDataStringInput



########### !!properties value

!name value

!type String



########### !!properties values

!name values

!type \[String!]



########### !!properties operator

!name operator

!type String!



########## !!properties value_int

!name value\_int

!type FilterDataIntInput



########### !!properties value

!name value

!type Int



########### !!properties values

!name values

!type \[Int!]



########### !!properties operator

!name operator

!type String!



########## !!properties value_bool

!name value\_bool

!type FilterDataBoolInput



########### !!properties value

!name value

!type Boolean!



########### !!properties operator

!name operator

!type String!



########## !!properties value_float

!name value\_float

!type FilterDataFloatInput



########### !!properties values

!name values

!type \[Float]



########### !!properties value

!name value

!type Float



########### !!properties operator

!name operator

!type String!



######## !!properties defined_event_id

!name defined\_event\_id

!type String



######## !!properties stable_id

!name stable\_id

!type String



######## !!properties parent_filter_stable_id

!name parent\_filter\_stable\_id

!type String



###### !!properties conversion_value

!name conversion\_value

!type FunnelConversionValueInput



####### !!properties property_name

!name property\_name

!type String!



####### !!properties value_type

!name value\_type

!type String!



####### !!properties label

!name label

!type String!



##### !!properties is_public

!name is\_public

!type Boolean



### !!definitions

#### !title Returns

#### !!properties funnel_id

!name funnel\_id

!type ID!



#### !!properties created_by_agent_id

!name created\_by\_agent\_id

!type String!



#### !!properties created_by_login

!name created\_by\_login

!type String!



#### !!properties website_id

!name website\_id

!type ID!



#### !!properties name

!name name

!type String!



#### !!properties description

!name description

!type String!



#### !!properties segment_id

!name segment\_id

!type String!



#### !!properties compute

!name compute

!type ComputeFunnel



##### !!properties date_range

!name date\_range

!type DateRange



###### !!properties from

!name from

!type RelativeDate



###### !!properties to

!name to

!type RelativeDate



##### !!properties steps

!name steps

!type \[FunnelStep]!



###### !!properties name

!name name

!type String



###### !!properties filters

!name filters

!type Filters



####### !!properties must

!name must

!type \[Filter]!



######## !!properties name

!name name

!type String!



######## !!properties unit

!name unit

!type String



######## !!properties group

!name group

!type String



######## !!properties data

!name data

!type FilterData!



######### !!properties string

!name string

!type FilterDataString



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String]



########## !!properties operator

!name operator

!type String!



######### !!properties int

!name int

!type FilterDataInt



########## !!properties value

!name value

!type Int



########## !!properties values

!name values

!type \[Int]



########## !!properties operator

!name operator

!type String!



######### !!properties bool

!name bool

!type FilterDataBool



########## !!properties value

!name value

!type Boolean



########## !!properties operator

!name operator

!type String!



######### !!properties event

!name event

!type FilterDataEvent



########## !!properties type

!name type

!type String!



########## !!properties group

!name group

!type FilterDataString



########### !!properties value

!name value

!type String



########### !!properties values

!name values

!type \[String]



########### !!properties operator

!name operator

!type String!



########## !!properties element

!name element

!type FilterDataString



########### !!properties value

!name value

!type String



########### !!properties values

!name values

!type \[String]



########### !!properties operator

!name operator

!type String!



########## !!properties txt

!name txt

!type FilterDataString



########### !!properties value

!name value

!type String



########### !!properties values

!name values

!type \[String]



########### !!properties operator

!name operator

!type String!



########## !!properties element_path

!name element\_path

!type FilterDataString



########### !!properties value

!name value

!type String



########### !!properties values

!name values

!type \[String]



########### !!properties operator

!name operator

!type String!



########## !!properties location

!name location

!type FilterDataString



########### !!properties value

!name value

!type String



########### !!properties values

!name values

!type \[String]



########### !!properties operator

!name operator

!type String!



########## !!properties value

!name value

!type FilterDataString



########### !!properties value

!name value

!type String



########### !!properties values

!name values

!type \[String]



########### !!properties operator

!name operator

!type String!



########## !!properties height

!name height

!type FilterDataInt



########### !!properties value

!name value

!type Int



########### !!properties values

!name values

!type \[Int]



########### !!properties operator

!name operator

!type String!



########## !!properties width

!name width

!type FilterDataInt



########### !!properties value

!name value

!type Int



########### !!properties values

!name values

!type \[Int]



########### !!properties operator

!name operator

!type String!



########## !!properties timestamp

!name timestamp

!type FilterDataInt



########### !!properties value

!name value

!type Int



########### !!properties values

!name values

!type \[Int]



########### !!properties operator

!name operator

!type String!



########## !!properties x

!name x

!type FilterDataInt



########### !!properties value

!name value

!type Int



########### !!properties values

!name values

!type \[Int]



########### !!properties operator

!name operator

!type String!



########## !!properties y

!name y

!type FilterDataInt



########### !!properties value

!name value

!type Int



########### !!properties values

!name values

!type \[Int]



########### !!properties operator

!name operator

!type String!



######### !!properties param

!name param

!type FilterDataParam



########## !!properties name

!name name

!type String!



########## !!properties value

!name value

!type FilterDataString



########### !!properties value

!name value

!type String



########### !!properties values

!name values

!type \[String]



########### !!properties operator

!name operator

!type String!



######### !!properties event_properties

!name event\_properties

!type \[FilterDataCustomEventProperty]



########## !!properties name

!name name

!type String!



########## !!properties value_str

!name value\_str

!type FilterDataString



########### !!properties value

!name value

!type String



########### !!properties values

!name values

!type \[String]



########### !!properties operator

!name operator

!type String!



########## !!properties value_bool

!name value\_bool

!type FilterDataBool



########### !!properties value

!name value

!type Boolean



########### !!properties operator

!name operator

!type String!



########## !!properties value_int

!name value\_int

!type FilterDataInt



########### !!properties value

!name value

!type Int



########### !!properties values

!name values

!type \[Int]



########### !!properties operator

!name operator

!type String!



########## !!properties value_float

!name value\_float

!type FilterDataFloat



########### !!properties value

!name value

!type Float!



########### !!properties values

!name values

!type \[Float!]



########### !!properties operator

!name operator

!type String!



######## !!properties defined_event_id

!name defined\_event\_id

!type String



######## !!properties stable_id

!name stable\_id

!type String



######## !!properties parent_filter_stable_id

!name parent\_filter\_stable\_id

!type String



####### !!properties should

!name should

!type \[Filter]!



######## !!properties name

!name name

!type String!



######## !!properties unit

!name unit

!type String



######## !!properties group

!name group

!type String



######## !!properties data

!name data

!type FilterData!



######### !!properties string

!name string

!type FilterDataString



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String]



########## !!properties operator

!name operator

!type String!



######### !!properties int

!name int

!type FilterDataInt



########## !!properties value

!name value

!type Int



########## !!properties values

!name values

!type \[Int]



########## !!properties operator

!name operator

!type String!



######### !!properties bool

!name bool

!type FilterDataBool



########## !!properties value

!name value

!type Boolean



########## !!properties operator

!name operator

!type String!



######### !!properties event

!name event

!type FilterDataEvent



########## !!properties type

!name type

!type String!



########## !!properties group

!name group

!type FilterDataString



########### !!properties value

!name value

!type String



########### !!properties values

!name values

!type \[String]



########### !!properties operator

!name operator

!type String!



########## !!properties element

!name element

!type FilterDataString



########### !!properties value

!name value

!type String



########### !!properties values

!name values

!type \[String]



########### !!properties operator

!name operator

!type String!



########## !!properties txt

!name txt

!type FilterDataString



########### !!properties value

!name value

!type String



########### !!properties values

!name values

!type \[String]



########### !!properties operator

!name operator

!type String!



########## !!properties element_path

!name element\_path

!type FilterDataString



########### !!properties value

!name value

!type String



########### !!properties values

!name values

!type \[String]



########### !!properties operator

!name operator

!type String!



########## !!properties location

!name location

!type FilterDataString



########### !!properties value

!name value

!type String



########### !!properties values

!name values

!type \[String]



########### !!properties operator

!name operator

!type String!



########## !!properties value

!name value

!type FilterDataString



########### !!properties value

!name value

!type String



########### !!properties values

!name values

!type \[String]



########### !!properties operator

!name operator

!type String!



########## !!properties height

!name height

!type FilterDataInt



########### !!properties value

!name value

!type Int



########### !!properties values

!name values

!type \[Int]



########### !!properties operator

!name operator

!type String!



########## !!properties width

!name width

!type FilterDataInt



########### !!properties value

!name value

!type Int



########### !!properties values

!name values

!type \[Int]



########### !!properties operator

!name operator

!type String!



########## !!properties timestamp

!name timestamp

!type FilterDataInt



########### !!properties value

!name value

!type Int



########### !!properties values

!name values

!type \[Int]



########### !!properties operator

!name operator

!type String!



########## !!properties x

!name x

!type FilterDataInt



########### !!properties value

!name value

!type Int



########### !!properties values

!name values

!type \[Int]



########### !!properties operator

!name operator

!type String!



########## !!properties y

!name y

!type FilterDataInt



########### !!properties value

!name value

!type Int



########### !!properties values

!name values

!type \[Int]



########### !!properties operator

!name operator

!type String!



######### !!properties param

!name param

!type FilterDataParam



########## !!properties name

!name name

!type String!



########## !!properties value

!name value

!type FilterDataString



########### !!properties value

!name value

!type String



########### !!properties values

!name values

!type \[String]



########### !!properties operator

!name operator

!type String!



######### !!properties event_properties

!name event\_properties

!type \[FilterDataCustomEventProperty]



########## !!properties name

!name name

!type String!



########## !!properties value_str

!name value\_str

!type FilterDataString



########### !!properties value

!name value

!type String



########### !!properties values

!name values

!type \[String]



########### !!properties operator

!name operator

!type String!



########## !!properties value_bool

!name value\_bool

!type FilterDataBool



########### !!properties value

!name value

!type Boolean



########### !!properties operator

!name operator

!type String!



########## !!properties value_int

!name value\_int

!type FilterDataInt



########### !!properties value

!name value

!type Int



########### !!properties values

!name values

!type \[Int]



########### !!properties operator

!name operator

!type String!



########## !!properties value_float

!name value\_float

!type FilterDataFloat



########### !!properties value

!name value

!type Float!



########### !!properties values

!name values

!type \[Float!]



########### !!properties operator

!name operator

!type String!



######## !!properties defined_event_id

!name defined\_event\_id

!type String



######## !!properties stable_id

!name stable\_id

!type String



######## !!properties parent_filter_stable_id

!name parent\_filter\_stable\_id

!type String



####### !!properties must_not

!name must\_not

!type \[Filter]!



######## !!properties name

!name name

!type String!



######## !!properties unit

!name unit

!type String



######## !!properties group

!name group

!type String



######## !!properties data

!name data

!type FilterData!



######### !!properties string

!name string

!type FilterDataString



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String]



########## !!properties operator

!name operator

!type String!



######### !!properties int

!name int

!type FilterDataInt



########## !!properties value

!name value

!type Int



########## !!properties values

!name values

!type \[Int]



########## !!properties operator

!name operator

!type String!



######### !!properties bool

!name bool

!type FilterDataBool



########## !!properties value

!name value

!type Boolean



########## !!properties operator

!name operator

!type String!



######### !!properties event

!name event

!type FilterDataEvent



########## !!properties type

!name type

!type String!



########## !!properties group

!name group

!type FilterDataString



########### !!properties value

!name value

!type String



########### !!properties values

!name values

!type \[String]



########### !!properties operator

!name operator

!type String!



########## !!properties element

!name element

!type FilterDataString



########### !!properties value

!name value

!type String



########### !!properties values

!name values

!type \[String]



########### !!properties operator

!name operator

!type String!



########## !!properties txt

!name txt

!type FilterDataString



########### !!properties value

!name value

!type String



########### !!properties values

!name values

!type \[String]



########### !!properties operator

!name operator

!type String!



########## !!properties element_path

!name element\_path

!type FilterDataString



########### !!properties value

!name value

!type String



########### !!properties values

!name values

!type \[String]



########### !!properties operator

!name operator

!type String!



########## !!properties location

!name location

!type FilterDataString



########### !!properties value

!name value

!type String



########### !!properties values

!name values

!type \[String]



########### !!properties operator

!name operator

!type String!



########## !!properties value

!name value

!type FilterDataString



########### !!properties value

!name value

!type String



########### !!properties values

!name values

!type \[String]



########### !!properties operator

!name operator

!type String!



########## !!properties height

!name height

!type FilterDataInt



########### !!properties value

!name value

!type Int



########### !!properties values

!name values

!type \[Int]



########### !!properties operator

!name operator

!type String!



########## !!properties width

!name width

!type FilterDataInt



########### !!properties value

!name value

!type Int



########### !!properties values

!name values

!type \[Int]



########### !!properties operator

!name operator

!type String!



########## !!properties timestamp

!name timestamp

!type FilterDataInt



########### !!properties value

!name value

!type Int



########### !!properties values

!name values

!type \[Int]



########### !!properties operator

!name operator

!type String!



########## !!properties x

!name x

!type FilterDataInt



########### !!properties value

!name value

!type Int



########### !!properties values

!name values

!type \[Int]



########### !!properties operator

!name operator

!type String!



########## !!properties y

!name y

!type FilterDataInt



########### !!properties value

!name value

!type Int



########### !!properties values

!name values

!type \[Int]



########### !!properties operator

!name operator

!type String!



######### !!properties param

!name param

!type FilterDataParam



########## !!properties name

!name name

!type String!



########## !!properties value

!name value

!type FilterDataString



########### !!properties value

!name value

!type String



########### !!properties values

!name values

!type \[String]



########### !!properties operator

!name operator

!type String!



######### !!properties event_properties

!name event\_properties

!type \[FilterDataCustomEventProperty]



########## !!properties name

!name name

!type String!



########## !!properties value_str

!name value\_str

!type FilterDataString



########### !!properties value

!name value

!type String



########### !!properties values

!name values

!type \[String]



########### !!properties operator

!name operator

!type String!



########## !!properties value_bool

!name value\_bool

!type FilterDataBool



########### !!properties value

!name value

!type Boolean



########### !!properties operator

!name operator

!type String!



########## !!properties value_int

!name value\_int

!type FilterDataInt



########### !!properties value

!name value

!type Int



########### !!properties values

!name values

!type \[Int]



########### !!properties operator

!name operator

!type String!



########## !!properties value_float

!name value\_float

!type FilterDataFloat



########### !!properties value

!name value

!type Float!



########### !!properties values

!name values

!type \[Float!]



########### !!properties operator

!name operator

!type String!



######## !!properties defined_event_id

!name defined\_event\_id

!type String



######## !!properties stable_id

!name stable\_id

!type String



######## !!properties parent_filter_stable_id

!name parent\_filter\_stable\_id

!type String



##### !!properties conversion_value

!name conversion\_value

!type FunnelConversionValue



###### !!properties property_name

!name property\_name

!type String!



###### !!properties value_type

!name value\_type

!type String!



###### !!properties label

!name label

!type String!



##### !!properties type

!name type

!type String



##### !!properties filters

!name filters

!type Filters



###### !!properties must

!name must

!type \[Filter]!



####### !!properties name

!name name

!type String!



####### !!properties unit

!name unit

!type String



####### !!properties group

!name group

!type String



####### !!properties data

!name data

!type FilterData!



######## !!properties string

!name string

!type FilterDataString



######### !!properties value

!name value

!type String



######### !!properties values

!name values

!type \[String]



######### !!properties operator

!name operator

!type String!



######## !!properties int

!name int

!type FilterDataInt



######### !!properties value

!name value

!type Int



######### !!properties values

!name values

!type \[Int]



######### !!properties operator

!name operator

!type String!



######## !!properties bool

!name bool

!type FilterDataBool



######### !!properties value

!name value

!type Boolean



######### !!properties operator

!name operator

!type String!



######## !!properties event

!name event

!type FilterDataEvent



######### !!properties type

!name type

!type String!



######### !!properties group

!name group

!type FilterDataString



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String]



########## !!properties operator

!name operator

!type String!



######### !!properties element

!name element

!type FilterDataString



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String]



########## !!properties operator

!name operator

!type String!



######### !!properties txt

!name txt

!type FilterDataString



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String]



########## !!properties operator

!name operator

!type String!



######### !!properties element_path

!name element\_path

!type FilterDataString



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String]



########## !!properties operator

!name operator

!type String!



######### !!properties location

!name location

!type FilterDataString



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String]



########## !!properties operator

!name operator

!type String!



######### !!properties value

!name value

!type FilterDataString



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String]



########## !!properties operator

!name operator

!type String!



######### !!properties height

!name height

!type FilterDataInt



########## !!properties value

!name value

!type Int



########## !!properties values

!name values

!type \[Int]



########## !!properties operator

!name operator

!type String!



######### !!properties width

!name width

!type FilterDataInt



########## !!properties value

!name value

!type Int



########## !!properties values

!name values

!type \[Int]



########## !!properties operator

!name operator

!type String!



######### !!properties timestamp

!name timestamp

!type FilterDataInt



########## !!properties value

!name value

!type Int



########## !!properties values

!name values

!type \[Int]



########## !!properties operator

!name operator

!type String!



######### !!properties x

!name x

!type FilterDataInt



########## !!properties value

!name value

!type Int



########## !!properties values

!name values

!type \[Int]



########## !!properties operator

!name operator

!type String!



######### !!properties y

!name y

!type FilterDataInt



########## !!properties value

!name value

!type Int



########## !!properties values

!name values

!type \[Int]



########## !!properties operator

!name operator

!type String!



######## !!properties param

!name param

!type FilterDataParam



######### !!properties name

!name name

!type String!



######### !!properties value

!name value

!type FilterDataString



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String]



########## !!properties operator

!name operator

!type String!



######## !!properties event_properties

!name event\_properties

!type \[FilterDataCustomEventProperty]



######### !!properties name

!name name

!type String!



######### !!properties value_str

!name value\_str

!type FilterDataString



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String]



########## !!properties operator

!name operator

!type String!



######### !!properties value_bool

!name value\_bool

!type FilterDataBool



########## !!properties value

!name value

!type Boolean



########## !!properties operator

!name operator

!type String!



######### !!properties value_int

!name value\_int

!type FilterDataInt



########## !!properties value

!name value

!type Int



########## !!properties values

!name values

!type \[Int]



########## !!properties operator

!name operator

!type String!



######### !!properties value_float

!name value\_float

!type FilterDataFloat



########## !!properties value

!name value

!type Float!



########## !!properties values

!name values

!type \[Float!]



########## !!properties operator

!name operator

!type String!



####### !!properties defined_event_id

!name defined\_event\_id

!type String



####### !!properties stable_id

!name stable\_id

!type String



####### !!properties parent_filter_stable_id

!name parent\_filter\_stable\_id

!type String



###### !!properties should

!name should

!type \[Filter]!



####### !!properties name

!name name

!type String!



####### !!properties unit

!name unit

!type String



####### !!properties group

!name group

!type String



####### !!properties data

!name data

!type FilterData!



######## !!properties string

!name string

!type FilterDataString



######### !!properties value

!name value

!type String



######### !!properties values

!name values

!type \[String]



######### !!properties operator

!name operator

!type String!



######## !!properties int

!name int

!type FilterDataInt



######### !!properties value

!name value

!type Int



######### !!properties values

!name values

!type \[Int]



######### !!properties operator

!name operator

!type String!



######## !!properties bool

!name bool

!type FilterDataBool



######### !!properties value

!name value

!type Boolean



######### !!properties operator

!name operator

!type String!



######## !!properties event

!name event

!type FilterDataEvent



######### !!properties type

!name type

!type String!



######### !!properties group

!name group

!type FilterDataString



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String]



########## !!properties operator

!name operator

!type String!



######### !!properties element

!name element

!type FilterDataString



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String]



########## !!properties operator

!name operator

!type String!



######### !!properties txt

!name txt

!type FilterDataString



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String]



########## !!properties operator

!name operator

!type String!



######### !!properties element_path

!name element\_path

!type FilterDataString



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String]



########## !!properties operator

!name operator

!type String!



######### !!properties location

!name location

!type FilterDataString



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String]



########## !!properties operator

!name operator

!type String!



######### !!properties value

!name value

!type FilterDataString



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String]



########## !!properties operator

!name operator

!type String!



######### !!properties height

!name height

!type FilterDataInt



########## !!properties value

!name value

!type Int



########## !!properties values

!name values

!type \[Int]



########## !!properties operator

!name operator

!type String!



######### !!properties width

!name width

!type FilterDataInt



########## !!properties value

!name value

!type Int



########## !!properties values

!name values

!type \[Int]



########## !!properties operator

!name operator

!type String!



######### !!properties timestamp

!name timestamp

!type FilterDataInt



########## !!properties value

!name value

!type Int



########## !!properties values

!name values

!type \[Int]



########## !!properties operator

!name operator

!type String!



######### !!properties x

!name x

!type FilterDataInt



########## !!properties value

!name value

!type Int



########## !!properties values

!name values

!type \[Int]



########## !!properties operator

!name operator

!type String!



######### !!properties y

!name y

!type FilterDataInt



########## !!properties value

!name value

!type Int



########## !!properties values

!name values

!type \[Int]



########## !!properties operator

!name operator

!type String!



######## !!properties param

!name param

!type FilterDataParam



######### !!properties name

!name name

!type String!



######### !!properties value

!name value

!type FilterDataString



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String]



########## !!properties operator

!name operator

!type String!



######## !!properties event_properties

!name event\_properties

!type \[FilterDataCustomEventProperty]



######### !!properties name

!name name

!type String!



######### !!properties value_str

!name value\_str

!type FilterDataString



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String]



########## !!properties operator

!name operator

!type String!



######### !!properties value_bool

!name value\_bool

!type FilterDataBool



########## !!properties value

!name value

!type Boolean



########## !!properties operator

!name operator

!type String!



######### !!properties value_int

!name value\_int

!type FilterDataInt



########## !!properties value

!name value

!type Int



########## !!properties values

!name values

!type \[Int]



########## !!properties operator

!name operator

!type String!



######### !!properties value_float

!name value\_float

!type FilterDataFloat



########## !!properties value

!name value

!type Float!



########## !!properties values

!name values

!type \[Float!]



########## !!properties operator

!name operator

!type String!



####### !!properties defined_event_id

!name defined\_event\_id

!type String



####### !!properties stable_id

!name stable\_id

!type String



####### !!properties parent_filter_stable_id

!name parent\_filter\_stable\_id

!type String



###### !!properties must_not

!name must\_not

!type \[Filter]!



####### !!properties name

!name name

!type String!



####### !!properties unit

!name unit

!type String



####### !!properties group

!name group

!type String



####### !!properties data

!name data

!type FilterData!



######## !!properties string

!name string

!type FilterDataString



######### !!properties value

!name value

!type String



######### !!properties values

!name values

!type \[String]



######### !!properties operator

!name operator

!type String!



######## !!properties int

!name int

!type FilterDataInt



######### !!properties value

!name value

!type Int



######### !!properties values

!name values

!type \[Int]



######### !!properties operator

!name operator

!type String!



######## !!properties bool

!name bool

!type FilterDataBool



######### !!properties value

!name value

!type Boolean



######### !!properties operator

!name operator

!type String!



######## !!properties event

!name event

!type FilterDataEvent



######### !!properties type

!name type

!type String!



######### !!properties group

!name group

!type FilterDataString



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String]



########## !!properties operator

!name operator

!type String!



######### !!properties element

!name element

!type FilterDataString



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String]



########## !!properties operator

!name operator

!type String!



######### !!properties txt

!name txt

!type FilterDataString



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String]



########## !!properties operator

!name operator

!type String!



######### !!properties element_path

!name element\_path

!type FilterDataString



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String]



########## !!properties operator

!name operator

!type String!



######### !!properties location

!name location

!type FilterDataString



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String]



########## !!properties operator

!name operator

!type String!



######### !!properties value

!name value

!type FilterDataString



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String]



########## !!properties operator

!name operator

!type String!



######### !!properties height

!name height

!type FilterDataInt



########## !!properties value

!name value

!type Int



########## !!properties values

!name values

!type \[Int]



########## !!properties operator

!name operator

!type String!



######### !!properties width

!name width

!type FilterDataInt



########## !!properties value

!name value

!type Int



########## !!properties values

!name values

!type \[Int]



########## !!properties operator

!name operator

!type String!



######### !!properties timestamp

!name timestamp

!type FilterDataInt



########## !!properties value

!name value

!type Int



########## !!properties values

!name values

!type \[Int]



########## !!properties operator

!name operator

!type String!



######### !!properties x

!name x

!type FilterDataInt



########## !!properties value

!name value

!type Int



########## !!properties values

!name values

!type \[Int]



########## !!properties operator

!name operator

!type String!



######### !!properties y

!name y

!type FilterDataInt



########## !!properties value

!name value

!type Int



########## !!properties values

!name values

!type \[Int]



########## !!properties operator

!name operator

!type String!



######## !!properties param

!name param

!type FilterDataParam



######### !!properties name

!name name

!type String!



######### !!properties value

!name value

!type FilterDataString



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String]



########## !!properties operator

!name operator

!type String!



######## !!properties event_properties

!name event\_properties

!type \[FilterDataCustomEventProperty]



######### !!properties name

!name name

!type String!



######### !!properties value_str

!name value\_str

!type FilterDataString



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String]



########## !!properties operator

!name operator

!type String!



######### !!properties value_bool

!name value\_bool

!type FilterDataBool



########## !!properties value

!name value

!type Boolean



########## !!properties operator

!name operator

!type String!



######### !!properties value_int

!name value\_int

!type FilterDataInt



########## !!properties value

!name value

!type Int



########## !!properties values

!name values

!type \[Int]



########## !!properties operator

!name operator

!type String!



######### !!properties value_float

!name value\_float

!type FilterDataFloat



########## !!properties value

!name value

!type Float!



########## !!properties values

!name values

!type \[Float!]



########## !!properties operator

!name operator

!type String!



####### !!properties defined_event_id

!name defined\_event\_id

!type String



####### !!properties stable_id

!name stable\_id

!type String



####### !!properties parent_filter_stable_id

!name parent\_filter\_stable\_id

!type String



#### !!properties is_favourite

!name is\_favourite

!type Boolean!



#### !!properties is_owner

!name is\_owner

!type Boolean!



#### !!properties is_public

!name is\_public

!type Boolean!

