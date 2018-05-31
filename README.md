# Serverless URL Shortener
Serverless application deployed to AWS Lambda
- Shortens URLs
- Redirects shortened URLs to original URLs

## Scalability test

Replace <% function URL %> with the actual URL that leads to the lambda function.
<br/>
Adjust the number set to PARALLEL_INVOCATIONS if needed, the example will trigger ten thousand parallel invocations.
```bash
export FUNCTION_URL=<% function URL %>
export PARALLEL_INVOCATIONS=10000
time seq $PARALLEL_INVOCATIONS | parallel --gnu --jobs 400% "curl -vL $FUNCTION_URL >> out.txt"
```