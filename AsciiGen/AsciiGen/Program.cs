using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Diagnostics;
using System.IO;

namespace AsciiGen
{
    class Program
    {
        static void Main(string[] args)
        {
            byte[] xx = Encoding.ASCII.GetBytes("t");
            byte[] zz = Encoding.ASCII.GetBytes("T");
            Debug.WriteLine(xx[0]);
            Debug.WriteLine(zz[0]);
                      
            List<string> main = new List<string>();
            main.Add("donald");
            main.Add("Donald");
            main.Add("DONALD");
            main.Add("donald j");
            main.Add("Donald J");
            main.Add("DONALD J");
            main.Add("trump");
            main.Add("Trump");
            main.Add("TRUMP");
            main.Add("DonaldJTrump");
            main.Add("donaldjtrump");
            main.Add("DONALDJTRUMP");
            main.Add("maga");
            main.Add("Maga");
            main.Add("MAGA");
            main.Add("pence");
            main.Add("Pence");
            main.Add("PENCE");
            main.Add("mike pence");
            main.Add("Mike Pence");
            main.Add("MIKE PENCE");
            main.Add("20");
            main.Add("16");
            main.Add("2020");
            main.Add("2016");
            main.Add("potus");
            main.Add("POTUS");
            main.Add("william barr");
            main.Add("William Barr");
            main.Add("WILLIAM BARR");
            main.Add("williambarr");
            main.Add("WilliamBarr");
            main.Add("barr");
            main.Add("Barr");
            main.Add("BARR");
            main.Add("billbarr");
            main.Add("BillBarr");
            main.Add("BILLBARR");
            main.Add("bill barr");
            main.Add("Bill Barr");
            main.Add("donaldj");
            main.Add("DonaldJ");
            main.Add("DONALDJ");
            main.Add("usa");
            main.Add("USA");
            main.Add("m.a.g.a.");
            main.Add("M.A.G.A.");
            main.Add("make america great again");
            main.Add("Make America Great Again");
            main.Add("MAKE AMERICA GREAT AGAIN");
            main.Add("Trump Pence");
            main.Add("trump pence");
            main.Add("TRUMP PENCE");
            main.Add("Trump-Pence");
            main.Add("trump-pence");
            main.Add("TRUMP-PENCE");
            main.Add("oooooo");

            string[] ss = main.ToArray();

            //for (int i = 1; i < 3; i++)
            //{
            //    int cnt = ss.Length / 3;
            //    int ji1 = cnt * i;
            //    int ji2 = cnt * (i + 1);


            //    for (int j = ji1; j < ji2; j++)
            //    {
            //        int ji = j - ji1;
            //        switch (i)
            //        {
            //            case 1:
            //                ss[j] = ss[ji].Substring(0, 1).ToString().ToUpper();
            //                if (ss[ji].Length > 1)
            //                {
            //                    ss[j] += ss[ji].Substring(1).ToLower();
            //                }
            //                break;
            //            case 2:
            //                ss[j] = ss[ji].ToUpper();
            //                break;
            //        }

            //    }

            //}

            // now lets fill a list with all possibilities
            List<string> baseList = ss.ToList();

            List<string> poss = new List<string>();

            foreach (string st in baseList)
            {
                if (ascttl(st) > 1638)
                {
                    continue;
                }

                poss.Add(st);
            }

            foreach (string st in baseList)
            {
                StringBuilder sb = new StringBuilder();
                StringBuilder sb2 = new StringBuilder();
                foreach (string st2 in baseList)
                {
                    if (st.Equals(st2, StringComparison.InvariantCultureIgnoreCase))
                    {
                        continue;
                    }
                    sb.Append(st).Append(" ").Append(st2);
                    sb2.Append(st).Append(st2);
                    string sbs = sb.ToString();
                    string sb2s = sb2.ToString();
                    if(!poss.Contains(sbs) && ascttl(sbs) < 1639)
                    {
                        poss.Add(sbs);
                    }
                    if (!poss.Contains(sb2s) && ascttl(sb2s) < 1639)
                    {
                        poss.Add(sb2s);
                    }
                    
                    sb.Clear();
                    sb2.Clear();
                }
            }

            List<string> toAdd = new List<string>();

            foreach (string st in poss)
            {
               if(ascttl(st) > 1638)
                {
                    continue;
                }

                foreach (string st2 in baseList)
                {
                    if (st.Equals(st2, StringComparison.InvariantCultureIgnoreCase))
                    {
                        continue;
                    }

                    string[] x = st.Split();
                    foreach(string z in x)
                    {
                        if (z.Equals(st2, StringComparison.InvariantCultureIgnoreCase))
                        {
                            continue;
                        }
                    }
                    StringBuilder sbb = new StringBuilder();
                    StringBuilder sbb2 = new StringBuilder();

                    sbb.Append(st).Append(" ").Append(st2);
                    sbb2.Append(st).Append(st2);
                    string sbbs = sbb.ToString();
                    string sbb2s = sbb2.ToString();
                    if (!poss.Contains(sbbs) && ascttl(sbbs) < 1639)
                    {
                        toAdd.Add(sbbs);
                    }
                    if (!poss.Contains(sbb2s) && ascttl(sbb2s) < 1639)
                    {
                        toAdd.Add(sbb2s);
                    }
                    sbb.Clear();
                    sbb2.Clear();
                }
            }

            poss.AddRange(toAdd);

            toAdd.Clear();
            
            foreach (string st in poss)
            {
                if(ascttl(st) > 1638)
                {
                    continue;
                }

                //foreach (string st2 in baseList)
                //{
                //    if (st.Equals(st2, StringComparison.InvariantCultureIgnoreCase))
                //    {
                //        continue;
                //    }

                //    string[] x = st.Split();
                //    foreach (string z in x)
                //    {
                //        if (z.Equals(st2, StringComparison.InvariantCultureIgnoreCase))
                //        {
                //            continue;
                //        }
                //    }
                //    StringBuilder sbb = new StringBuilder();
                //    StringBuilder sbb2 = new StringBuilder();

                //    sbb.Append(st).Append(" ").Append(st2);
                //    sbb2.Append(st).Append(st2);
                //    string sbbs = sbb.ToString();
                //    string sbb2s = sbb2.ToString();
                //    if (!poss.Contains(sbbs) && ascttl(sbbs) < 1639)
                //    {
                //        toAdd.Add(sbbs);
                //    }
                //    if (!poss.Contains(sbb2s) && ascttl(sbb2s) < 1639)
                //    {
                //        toAdd.Add(sbb2s);
                //    }
                //    sbb.Clear();
                //    sbb2.Clear();
                //}
            }

            // poss.AddRange(toAdd);

            string f = Path.GetFileNameWithoutExtension(Path.GetTempFileName());
            string path = $@"c:\temp\trump_{f}.txt";

            using (StreamWriter sw = new StreamWriter(path, false))
            {
                foreach (string s in poss)
                {
                    int ttl = ascttl(s);
                    if (ttl == 666)
                    {
                        Debug.WriteLine($"{s}: {ttl}");
                        sw.WriteLine($"{s}: {ttl}");
                    }

                    if (ttl == 1638)
                    {
                        Debug.WriteLine($"{s}: {ttl}");
                        sw.WriteLine($"{s}: {ttl}");
                    }

                    if (ttl == 438)
                    {
                        Debug.WriteLine($"{s}: {ttl}");
                        sw.WriteLine($"{s}: {ttl}");
                    }
                }
                sw.WriteLine($"{poss.Count:N} possibilities analyzed");
            }

            Debug.WriteLine("-----------------------");
            Debug.WriteLine($"{poss.Count:N} possibilities analyzed");

            int ascttl (string s)
            {
                int total = 0;
                byte[] a = Encoding.ASCII.GetBytes(s);
                foreach (byte b in a)
                {
                    total += b;
                //    Debug.WriteLine(b);
                }
                return total;
            }


        }
    }
}
