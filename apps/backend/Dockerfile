FROM php:7.4-apache

EXPOSE 80

ENV JWT_SECRET_KEY=/var/.ssh/private.pem
ENV JWT_PUBLIC_KEY=/var/.ssh/public.pem

COPY ./StratWarsApi/bin/ssh-keygen /usr/bin/ssh-generate.sh

RUN chmod +x /usr/bin/ssh-generate.sh
RUN (cd /var; /usr/bin/ssh-generate.sh; chmod 664 .ssh/*)

WORKDIR /srv

RUN apt-get update \
	&& apt-get install -y \
		git \
		zip \
		unzip \
		g++ \
		libicu-dev \
		&& curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer \
		&& apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* 

RUN docker-php-ext-install pdo_mysql intl

COPY docker/php.ini /usr/local/etc/php/conf.d/app.ini

COPY docker/vhost.conf /etc/apache2/sites-available/000-default.conf
COPY docker/apache2.conf /etc/apache2/conf-available/001.conf



RUN a2enmod rewrite remoteip \
	&& a2enmod headers \
    && a2enconf 001 \
    && a2ensite 000-default

CMD php

CMD apachectl -D FOREGROUND