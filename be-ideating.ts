import {define, BeDecoratedProps} from 'be-decorated/DE.js';
import {Proxy, PP, Actions, VirtualProps, PPP, PPE} from './types';
import {register} from 'be-hive/register.js';

export class BeIdeating extends EventTarget implements Actions{
    ideate(pp: PP, mold: PPP): PPP {
        const {self} = pp;
        const rn = self.getRootNode() as DocumentFragment;
        const matchInThisRealm = rn.getElementById(self.localName);
        if(matchInThisRealm !== null){
            //move to be-hive so child shadow DOM's can inherit it
            if(matchInThisRealm.closest('be-hive') === null){
                const beHive = rn.querySelector('be-hive');
                beHive!.appendChild(matchInThisRealm);
            }
        }
        return mold;
    }
}

const tagName = 'be-ideating';
const ifWantsToBe = 'ideating';
const upgrade = '*';

define<Proxy & BeDecoratedProps<Proxy, Actions>, Actions>({
    config:{
        tagName,
        propDefaults:{
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
    complexPropDefaults:{
        controller: BeIdeating,
    }
});
register(ifWantsToBe, upgrade, tagName);