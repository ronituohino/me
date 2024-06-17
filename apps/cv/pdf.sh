#!/bin/bash

start_server() {
  npm run dev-hide &
}

check_server() {
    curl -s http://localhost:5173 >/dev/null
    return $?
}

kill_server() {
  PID="$(ss -lp -H 'sport = :5173' | grep -oP '(?<=pid=).*(?=,)')"
  kill $PID
}

start_server

MAX_ATTEMPTS=20
DELAY=1

echo "Waiting for the server to start..."

# Loop until the server responds or maximum attempts reached
attempt=1
while [ $attempt -le $MAX_ATTEMPTS ]; do
    if check_server; then
        echo "Server is running!"
        npm run print
        kill_server
        exit 0
    fi

    echo "Attempt $attempt: Server is not yet running..."
    sleep $DELAY
    ((attempt++))
done

echo "Server did not start within the specified time."
exit 1