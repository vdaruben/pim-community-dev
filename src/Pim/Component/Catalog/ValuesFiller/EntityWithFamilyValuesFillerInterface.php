<?php

namespace Pim\Component\Catalog\ValuesFiller;

use Pim\Component\Catalog\Model\EntityWithFamilyInterface;

/**
 * @author    Adrien Pétremann <adrien.petremann@akeneo.com>
 * @copyright 2017 Akeneo SAS (http://www.akeneo.com)
 * @license   http://opensource.org/licenses/osl-3.0.php Open Software License (OSL 3.0)
 */
interface EntityWithFamilyValuesFillerInterface
{
    /**
     * Add empty values for family for relevant scopes and locales
     *
     * It makes sure that if an attribute is localizable/scopable, then all values in the required locales/channels
     * exist. If the attribute is not scopable or localizable, makes sure that a single value exists.
     *
     * @param EntityWithFamilyInterface $entity
     */
    public function fillMissingValues(EntityWithFamilyInterface $entity): void;
}
