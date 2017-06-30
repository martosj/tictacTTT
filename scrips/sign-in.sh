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
