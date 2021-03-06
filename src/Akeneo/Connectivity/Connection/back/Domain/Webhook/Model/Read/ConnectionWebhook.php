<?php
declare(strict_types=1);

namespace Akeneo\Connectivity\Connection\Domain\Webhook\Model\Read;

/**
 * @author    Willy Mesnage <willy.mesnage@akeneo.com>
 * @copyright 2020 Akeneo SAS (http://www.akeneo.com)
 * @license   http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 */
class ConnectionWebhook
{
    /** @var string */
    private $connectionCode;

    /** @var ?string */
    private $secret;

    /** @var ?string */
    private $url;

    /** @var bool */
    private $enabled;

    /** @var ?string */
    private $connectionImage;

    public function __construct(
        string $connectionCode,
        bool $enabled,
        ?string $secret = null,
        ?string $url = null,
        ?string $connectionImage = null
    ) {
        $this->enabled = $enabled;
        $this->connectionCode = $connectionCode;
        $this->secret = $secret;
        $this->url = $url;
        $this->connectionImage = $connectionImage;
    }

    public function connectionCode(): string
    {
        return $this->connectionCode;
    }

    public function secret(): ?string
    {
        return $this->secret;
    }

    public function url(): ?string
    {
        return $this->url;
    }

    public function enabled(): bool
    {
        return $this->enabled;
    }

    public function connectionImage(): ?string
    {
        return $this->connectionImage;
    }

    /**
     * @return array{
     *  connectionCode: string,
     *  enabled: boolean,
     *  secret: ?string,
     *  url: ?string,
     *  connectionImage: ?string
     * }
     */
    public function normalize(): array
    {
        return [
            'connectionCode' => $this->connectionCode(),
            'enabled' => $this->enabled(),
            'secret' => $this->secret(),
            'url' => $this->url(),
            'connectionImage' => $this->connectionImage(),
        ];
    }
}
