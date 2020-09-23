<?php

namespace App\EventSubscriber;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\Event\RequestEvent;
use Symfony\Component\HttpFoundation\JsonResponse;

class ApiContentTypeValidationSubscriber implements EventSubscriberInterface
{
    public function onKernelRequest(RequestEvent $event)
    {
        if (!$event->isMasterRequest()) return;

        $request = $event->getRequest();
        //var_dump($request->isMethodSafe(false));
        // no validation needed on safe methods
        if ($request->isMethodSafe(false) || !$request->attributes->get('_is_api')) return;

        //var_dump($request->headers->get('Content-Type'));

        $contentTypes = explode(';', $request->headers->get('Content-Type'));

        if (!in_array('application/json', $contentTypes) ) {
            $response = new JsonResponse([
                'message' => 'Invalid Content-Type'
            ], 415);
            $event->setResponse($response);
            return;
        }
    }

    public static function getSubscribedEvents()
    {
        return [
            'kernel.request' => 'onKernelRequest',
        ];
    }
}
