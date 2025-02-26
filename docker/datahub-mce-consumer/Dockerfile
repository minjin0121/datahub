# Defining environment
ARG APP_ENV=prod

FROM golang:1-alpine3.17 AS binary

ENV DOCKERIZE_VERSION v0.6.1
WORKDIR /go/src/github.com/jwilder

RUN apk --no-cache --update add openssl git tar curl

WORKDIR /go/src/github.com/jwilder/dockerize

RUN go install github.com/jwilder/dockerize@$DOCKERIZE_VERSION

FROM alpine:3 AS base

# Upgrade Alpine and base packages
ENV JMX_VERSION=0.18.0
RUN apk --no-cache --update-cache --available upgrade \
    && apk --no-cache add curl bash \
    && apk --no-cache add openjdk11-jre --repository=http://dl-cdn.alpinelinux.org/alpine/edge/community \
    && wget --no-verbose https://github.com/open-telemetry/opentelemetry-java-instrumentation/releases/download/v1.24.0/opentelemetry-javaagent.jar \
    && wget --no-verbose https://repo1.maven.org/maven2/io/prometheus/jmx/jmx_prometheus_javaagent/${JMX_VERSION}/jmx_prometheus_javaagent-${JMX_VERSION}.jar -O jmx_prometheus_javaagent.jar \
    && cp /usr/lib/jvm/java-11-openjdk/jre/lib/security/cacerts /tmp/kafka.client.truststore.jks
COPY --from=binary /go/bin/dockerize /usr/local/bin

FROM base as prod-install
COPY mce-consumer-job.jar /datahub/datahub-mce-consumer/bin/
COPY metadata-models/src/main/resources/entity-registry.yml /datahub/datahub-mce-consumer/resources/entity-registry.yml
COPY docker/datahub-mce-consumer/start.sh /datahub/datahub-mce-consumer/scripts/
COPY docker/monitoring/client-prometheus-config.yaml /datahub/datahub-mce-consumer/scripts/prometheus-config.yaml
RUN chmod +x /datahub/datahub-mce-consumer/scripts/start.sh

FROM base as dev-install
# Dummy stage for development. Assumes code is built on your machine and mounted to this image.
# See this excellent thread https://github.com/docker/cli/issues/1134
COPY metadata-models/src/main/resources/entity-registry.yml /datahub/datahub-mce-consumer/resources/entity-registry.yml

FROM ${APP_ENV}-install as final

RUN addgroup -S datahub && adduser -S datahub -G datahub
USER datahub

ENV JMX_OPTS=""
ENV JAVA_OPTS=""

EXPOSE 9090

HEALTHCHECK --start-period=2m --retries=4 CMD curl --fail http://localhost:9090/actuator/health || exit 1

CMD /datahub/datahub-mce-consumer/scripts/start.sh
