# Stage 1: Build
FROM node:20-18.1-alpine AS build

# Install pnpm globally
RUN npm install -g @xyd-js/cli

# Set the working directory
WORKDIR /app

# Copy the repository or script into the container
COPY docs docs

# Workdir docs
WORKDIR /app/docs

# Install dependencies
RUN npm install

# Build
RUN xyd build

# Stage 2: Runtime
FROM node:20-18.1-alpine

# Set the working directory
WORKDIR /app/docs

# Copy built files from the build stage
COPY --from=build /app/docs /app/docs

# Install only production dependencies
RUN npm install --production

# Ensure xyd is installed in the runtime stage
RUN npm install -g @xyd-js/cli

# Set the PORT environment variable
ENV PORT=3000

# Expose port 3000
EXPOSE 3000

# Start server
CMD ["xyd", "start"]