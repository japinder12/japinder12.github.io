if ! echo "$VERCEL_GIT_COMMIT_MESSAGE" | grep -qi "\[deploy\]"; then
  echo "Skipping (no [deploy])"
  exit 0
fi
exit 1
