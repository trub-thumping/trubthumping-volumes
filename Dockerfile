FROM alpine
MAINTAINER jspc <james@zero-internet.org.uk>

VOLUME /var/lib/ghost
ADD ghost/ /var/lib/ghost

CMD ["sh", "-c", "while true; do sleep 100; done"]
