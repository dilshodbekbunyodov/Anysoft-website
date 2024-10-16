#!/bin/bash
set -euo pipefail

# Define variables
IMAGE_NAME="anysoftpro/anysoft-web"
VERSION="${1:?No version supplied}"

# Build and push image
docker build \
  --tag "$IMAGE_NAME:$VERSION" \
  --tag "$IMAGE_NAME:latest" \
  --no-cache \
  --push .

# Confirm successful build and push
if docker manifest inspect "$IMAGE_NAME:$VERSION" >/dev/null 2>&1; then
  printf 'Successfully built and pushed %s:%s\n' "$IMAGE_NAME" "$VERSION"
else
  printf 'Failed to build and push %s:%s\n' "$IMAGE_NAME" "$VERSION" >&2
  exit 1
fi
