<?php

declare(strict_types=1);

namespace Akeneo\Pim\Enrichment\Component\Product\Webhook;

use Akeneo\Pim\Enrichment\Component\Product\Message\ProductRemoved;
use Akeneo\Platform\Component\Webhook\EventDataBuilderInterface;
use Akeneo\Platform\Component\Webhook\EventDataCollection;
use Akeneo\UserManagement\Component\Model\UserInterface;

/**
 * @copyright 2020 Akeneo SAS (http://www.akeneo.com)
 * @license   http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 */
class ProductRemovedEventDataBuilder implements EventDataBuilderInterface
{
    public function supports(object $event): bool
    {
        return $event instanceof ProductRemoved;
    }

    /**
     * @param ProductRemoved $event
     */
    public function build(object $event, UserInterface $user): EventDataCollection
    {
        if (false === $this->supports($event)) {
            throw new \InvalidArgumentException();
        }

        $data = $event->getData();

        return (new EventDataCollection())
            ->setEventData($event, [
                'resource' => ['identifier' => $data['identifier']]
            ]);
    }
}
