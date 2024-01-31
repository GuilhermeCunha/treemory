FROM node:20

ARG USER_ID=1000
ARG GROUP_ID=1000
ENV USER_ID=${USER_ID}
ENV GROUP_ID=${GROUP_ID}

RUN npm install -g pnpm

WORKDIR /usr/src/app

# # Adjust the node user and group IDs
RUN groupmod --gid ${GROUP_ID} node
RUN usermod --uid ${USER_ID} node
RUN chown -R ${USER_ID}:${GROUP_ID} /home/node
RUN chown ${USER_ID}:${GROUP_ID} /usr/src/app
RUN chown -R ${USER_ID}:${GROUP_ID} /usr/src/app
RUN pnpm config set store-dir ./.pnpm-store

# # Switch to the node user
USER node