FROM alpine:3.10
RUN apk add --update sqlite
RUN mkdir /db
WORKDIR /db

ENTRYPOINT ["sqlite3"]
CMD ["datingapp.db"]

# Get Base Image (Full .NET Core SDK)
FROM mcr.microsoft.com/dotnet/sdk AS build-env
WORKDIR /APP

# Copy csproj and restore
COPY *.csproj ./
RUN dotnet restore

# Copy everything else and build
COPY . ./
RUN dotnet publish -c Release -o out

# Generate runtime image
FROM mcr.microsoft.com/dotnet/aspnet
WORKDIR /APP
EXPOSE 80
COPY --from=build-env /APP/out .
ENTRYPOINT ["dotnet", "API.dll"]