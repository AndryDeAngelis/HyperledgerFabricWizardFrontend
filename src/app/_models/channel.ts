import {Consortium} from './consortium';
import {Org} from './org';

export class Channel {
  name: string;
  consortium: Consortium;
  orgs: Org[];

  constructor(name?: string, consortium?: Consortium, orgs?: Org[]) {
    this.name = name;
    this.consortium = consortium;
    this.orgs = orgs;
  }

  /*toJSON(): object {
    return {
      name: this.name,
      consortium: this.consortium,
      orgs: this.orgs.map(o => o.fullName)
    };
  }*/
  static parse(obj: any): Channel {
    const channel = new Channel();
    if (obj.name) {
      channel.name = obj.name;
    }
    if (obj.consortium) {
      channel.consortium = Consortium.parse(obj.consortium);
    }
    if (Array.isArray(obj.orgs)) {
      channel.orgs = [];
      obj.orgs.forEach(o => {
        channel.orgs.push(Org.parse(o));
      });
    }
    return channel;
  }
}
