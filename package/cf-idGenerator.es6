/**
 * Created by yanxlg on 2017/5/26 0026.
 * id 生成序列
 */
let lastUuidAmend=0;
class IDGenerator{
    static uuid(){
        return(new Date()).getTime() * 1000 + (lastUuidAmend++) % 1000;
    }
}
export default IDGenerator;