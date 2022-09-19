import Service from '@ember/service';

const regions = [
    {
        extension: 'com',
        domain: 'inindca',
        region: 'inindca',
    },
    {
        extension: 'com',
        domain: 'mypurecloud',
        region: 'us-east-1',
    },
    {
        extension: 'cloud',
        domain: 'usw2.pure',
        region: 'us-west-2',
    },
    {
        extension: 'com.au',
        domain: 'mypurecloud',
        region: 'ap-southeast-2',
    },
    {
        extension: 'jp',
        domain: 'mypurecloud',
        region: 'ap-northeast-1',
    },
    {
        extension: 'ie',
        domain: 'mypurecloud',
        region: 'eu-west-1',
    },
    {
        extension: 'de',
        domain: 'mypurecloud',
        region: 'eu-central-1',
    },
    {
        extension: 'cloud',
        domain: 'apne2.pure',
        region: 'ap-northeast-2',
        icon: 'seoul'
    },
    {
        extension: 'cloud',
        domain: 'euw2.pure',
        region: 'eu-west-2',
    },
    {
        extension: 'cloud',
        domain: 'cac1.pure',
        region: 'ca-central-1',
    },
    {
        extension: 'cloud',
        domain: 'aps1.pure',
        region: 'ap-south-1',
    },
    {
        extension: 'cloud',
        domain: 'use2.us-gov-pure',
        region: 'fedramp-use2-core',
    },
    {
        extension: 'cloud',
        domain: 'use2.maximus-pure.cloud',
        region: 'maximus-use2-core',
    }
];

function _getRegion(region) {
    for (var i = 0; i < regions.length; i++) {
        if (regions[i].region == region) {
            return regions[i];
        }
    }
}

export default Service.extend({
    region:undefined,
    getRegionUrl(region) {
        this.region = _getRegion(region);
        return `https://apps.${this.region.domain}.${this.region.extension}`;
    },
    getRegionApiUrl(region) {
        this.region = _getRegion(region);
        return `https://api.${this.region.domain}.${this.region.extension}`;
    },
    getRegionAuthUrl(region) {
        this.region = _getRegion(region);
        return `https://login.${this.region.domain}.${this.region.extension}`;
    },
});
