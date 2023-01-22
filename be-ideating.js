import { define } from 'be-decorated/DE.js';
import { register } from 'be-hive/register.js';
export class BeIdeating extends EventTarget {
    ideate(pp, mold) {
        const { self } = pp;
        const rn = self.getRootNode();
        const matchInThisRealm = rn.getElementById(self.localName);
        if (matchInThisRealm !== null) {
            //move to be-hive so child shadow DOM's can inherit it
            if (matchInThisRealm.closest('be-hive') === null) {
                const beHive = rn.querySelector('be-hive');
                beHive.appendChild(matchInThisRealm);
            }
        }
        return mold;
    }
}
const tagName = 'be-ideating';
const ifWantsToBe = 'ideating';
const upgrade = '*';
define({
    config: {
        tagName,
        propDefaults: {
            ifWantsToBe,
            upgrade,
            virtualProps: ['isC'],
            proxyPropDefaults: {
                isC: true,
            }
        },
        actions: {
            ideate: {
                ifAllOf: ['isC'],
                returnObjMold: {
                    resolved: true,
                }
            }
        }
    },
    complexPropDefaults: {
        controller: BeIdeating,
    }
});
register(ifWantsToBe, upgrade, tagName);
