
export class Dotify{

    public static dotify(obj:object){

        let res = {};

        new Dotify().recurse(obj,res);
        // console.log('dotified'+ res);
        return res;
    }

    public recurse(Obj: object,Res:object, Current?: string) {
        for (const Key in Obj) {
          const Value =Obj[Key];
          const NewKey = (Current ? Current + '.' + Key : Key);
          if (Value && typeof Value === 'object') {
            this.recurse(Value,Res, NewKey);
          } else {
            Res[NewKey] = Value;
          }
        }
      }
}

