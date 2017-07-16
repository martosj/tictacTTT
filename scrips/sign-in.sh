#!/bin/bash

#curl "http://localhost:3000/sign-in" \
curl "https://ga-library-api.herokuapp.com/sign-up" \
  --include \
  --request POST \
  --data-urlencode '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
    }
  }'

echo
