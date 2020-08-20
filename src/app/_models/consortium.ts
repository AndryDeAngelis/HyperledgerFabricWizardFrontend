import {Org} from './org';

export class Consortium {
  name: string;
  orgs: Org[];


  constructor(name?: string, orgs?: Org[]) {
    this.name = name;
    this.orgs = orgs;
  }

  /*toJSON(): object {
    return {
      name: this.name,
      orgs: this.orgs.map(o => o.fullName)
    };
  }*/


  static parse(obj: any): Consortium {
    const consortium = new Consortium();
    if (obj.name) {
      consortium.name = obj.name;
    }
    if (Array.isArray(obj.orgs)) {
      consortium.orgs = [];
      obj.orgs.forEach(o => {
        consortium.orgs.push(Org.parse(o));
      });
    }
    return consortium;
  }
}
