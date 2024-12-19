 ---
 symbols: `↓`, `→`, `↗`, `*\`, `*`, `|`, `""""`, `#[...level]`, `[<symbol>/<prop>]`, `(...)`, `(<name>)`, `(<name>|<second>|<third>)`, `⇪`, `<~`, `<~>`, `~>`, `//`, `@`
    * `↓` - dropdown link to the section
    * `→` - drawer link to the section
    * `↗` - external link
    * `*\` - empty sidebar level
    * `*` - sidebar level
    * `|` - toc element
    * `""""` - content block
    * `#[...level]` - heading
    * `[<symbol>/<prop>]` - symbol prop e.g `[#/subtitle]`
    * `(...)` - lorem ipsum content
    * `btn(<name>)` - button
    * `btn(<name>|<second>|<third>)` - tabs
    * `⇪` - sticky
    * `<~` - left content
    * `<~>` - middle content
    * `~>` - right content
    * `//` - comment
    * `@` - search

 > and all standard markdown syntax

directives:
    - navbar
    - page (url, variant)
    - sidebar-footer
 ---

<navbar>
    <~

    <~>
    * Docs
    * Apps
    * API references
        * Browser
        * REST
        * GraphQL
        * View all

    ~>
    * btn(Login)
    * btn(Signup)
</navbar>

<page url="/docs">
    *\ @
    *\ Get Started
    * Overview
        // custom start page
    * Quickstart
        | Install LiveSession
        | Send events
        | Identify users
        | Event properties

        """
            # Developer quickstart
            [#/subtitle] Learn how to start with LiveSession.

            LiveSession is a powerful tool that helps you understand how users [interact] with your product.
            This guide will help you get started with LiveSession and start capturing [user interactions] and analyzing them.

            ### Install LiveSession
            (...)
        """
    * Frameworks
    * Reverse Proxy
        | Cloudflare
        | Netlify
        | nginx

        """
            (...)
        """
<!--     * Migrate -->
    * Changelog

    *\ Capabilities
    * Alerting
    * User paths
    * Funnels
    * Trends

<!--     * Session Replay ? -->
<!--     * Customer Data Platform ? -->

<!--     *\ Capabilities -->
<!--     * Product OS -->
<!--     * Customer Data Platform -->

<!--     *\ Features -->
<!--     * Session Replay -->
<!--     * Product Analytics -->
<!--     * Data Pipelines -->
<!--     * Data Warehouse -->

    *\ Analytics
    * Overview
    * Capturing events
    * Identifying users
    * Tutorials & Guides
    * FAQ

    *\ Session Replay
    * Overview
    * Privacy controls
    * Recording conditions
    * Tutorials & Guides
    * FAQ

    *\ Data I/O
    * Overview
    * Data Export
    * Tutorials & Guides
    * FAQ

    *\ Resources
    * APIs and references
    * Apps
    * SDKs
</page>

<page url="/docs/apps">
   <navbar>
       * Build
       * Design
       * Launch
   </navbar>
</page>

<page variant="1" url="/docs/apis">
    <page>
        *\ Get Started
        * Quickstart
            // custom start page
        * Limits
        * Data Model
        -
        *\ API
        * [Browser](/docs/apis/browser)

        * [Mobile](/docs/apis/mobile)
        * [GraphQL](/docs/apis/graphql)
        * [REST](/docs/apis/rest)
        * [Webhooks](/docs/apis/webhooks)
        * [Warehouse](/docs/apis/warehouse)
        -
        *\ Tools
        * Analytics as Code
        * REPL
        * lyticsman
        -
        *\ Resources
        * Sample Apps
        * Design System
    </page>

   <page url="/:api">
       <navbar>
            * Browser
            * Mobile
            * GraphQL
            * REST
            * Webhooks
            * Warehouse
       </navbar>
   </page>
</page>

<page variant="2" name="/docs/apis">
    *\ Get Started
    * Quickstart
        // custom start page
    * Limits
    * Data Model
    -
    *\ API
    * [Browser](/docs/apis/browser)
    * [Mobile](/docs/apis/mobile)
    * [GraphQL](/docs/apis/graphql)
    * [REST](/docs/apis/rest)
    * [Webhooks](/docs/apis/webhooks)
    * [Warehouse](/docs/apis/warehouse)
    -
    *\ Tools
    * Analytics as Code
    * REPL
    * lyticsman
    -
    *\ Resources
    * Sample Apps
    * Design System

    *\ API
    * Browser →
    * Mobile →
    * GraphQL →
    * REST →
    * Webhooks →
    * Warehouse →
</page>

<sidebar-footer>
    *\ ⇪
    * Cookbook
    * Community
    * Marketplace
    * SDKs
</sidebar-footer>