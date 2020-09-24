using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Diagnostics;

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
           

            string[] ss = new string[78];
            string[] res = new string[] { };


            ss[0] = "donald";
            ss[1] = "donald j";
            ss[2] = "trump";
            ss[3] = "maga";
            ss[4] = "america";
            ss[5] = "great";
            ss[6] = "pence";
            ss[7] = "mike pence";
            ss[8] = "20";
            ss[9] = "16";
            ss[10] = "2020";
            ss[11] = "2016";
            ss[12] = "potus";
            ss[13] = "william barr";
            ss[13] = "williambarr";
            ss[14] = "barr";
            ss[15] = "billbarr";
            ss[16] = "bill barr";
            ss[17] = "donaldj";
            ss[18] = "usa";
            ss[19] = "don";
            ss[20] = "donj";
            ss[21] = "don j";
            ss[22] = "mikepence";
            ss[23] = "m.a.g.a.";
            ss[24] = "virus";
            ss[25] = "oooooo";

            for (int i = 1; i < 3; i++)
            {
                int cnt = ss.Length / 3;
                int ji1 = cnt * i;
                int ji2 = cnt * (i + 1);


                for (int j = ji1; j < ji2; j++)
                {
                    int ji = j - ji1;
                    switch (i)
                    {
                        case 1:
                            ss[j] = ss[ji].Substring(0, 1).ToString().ToUpper();
                            if (ss[ji].Length > 1)
                            {
                                ss[j] += ss[ji].Substring(1).ToLower();
                            }
                            break;
                        case 2:
                            ss[j] = ss[ji].ToUpper();
                            break;
                    }

                }

            }

            // now lets fill a list with all possibilities
            List<string> baseList = ss.ToList();

            List<string> poss = new List<string>();

            foreach (string st in baseList)
            {
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
                    if(!poss.Contains(sbs))
                    {
                        poss.Add(sbs);
                    }
                    if (!poss.Contains(sb2s))
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
                    if (!poss.Contains(sbbs))
                    {
                        toAdd.Add(sbbs);
                    }
                    if (!poss.Contains(sbb2s))
                    {
                        toAdd.Add(sbb2s);
                    }
                    sbb.Clear();
                    sbb2.Clear();
                }
            }

            poss.AddRange(toAdd);

            foreach(string s in poss)
            {
                int ttl = ascttl(s);
                if(ttl == 666)
                {
                    Debug.WriteLine($"{s}: {ttl}");
                }
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
