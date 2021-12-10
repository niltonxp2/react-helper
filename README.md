## Arquitetura projetos em ReactJs

### Vertical slices / Feature Driven Architecture

src
|_app # contains app-wide setup and layout that depends on all the other folders
  |_components
    |_Layout
    |_Providers
  |_config -> configuration variables
  |_routes -> import pages and create routes
  |_styles -> global styles
  |_store  -> global store setup if usage with redux
  |_rootReducer.ts
  |_index.ts
  |_App.tsx -> composing app with providers and whatever is necessary for initialization
  |_index.ts -> expose App to main entry point to be rendered
|_assets
|_components # global components
|_features|modules|domains|containers
  |_dashboard
    |_components
    |_constants
    |_contexts
    |_hooks
    |_requests
    |_queries
    |_types
    |_utils
    |_index.ts -> this is the entry point to a feature, it serves as the public API
|_mocks  # mocks and handlers with msw
|_pages
  |_DashboardPage
|_service
  |_api -> axios/fetch instance
  |_query_client
  |_sentry
  |_etc...
|_shared # shared functions grouped by domain
  |_date
    |_format-date.ts
    |_format-hour.ts
|_index.ts ## entry point file that renders the React component tree