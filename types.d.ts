import {BeDecoratedProps, MinimalProxy, EventConfigs} from 'be-decorated/types';

export interface EndUserProps{}

export interface VirtualProps extends EndUserProps, MinimalProxy{
    isC: boolean;
}

export type Proxy = Element & VirtualProps;

export interface PP extends VirtualProps{
    proxy: Proxy;
}

export type PPP = Partial<PP>;

export type PPE = [PPP, EventConfigs<PPP, Actions>];

export interface Actions{
    ideate(pp: PP, mold: PPP): PPP;
}