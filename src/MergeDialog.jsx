import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const MergeDialog =()=>{
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">Merge</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[800px]">
          <DialogHeader>
            <DialogTitle>Merge Dialog</DialogTitle>
            <DialogDescription>
            <table className="w-full border-collapse border border-gray-400">
              <thead>
                <tr>
                  <th className="border border-gray-400 py-1 text-center">Chapter</th>
                  <th className="border border-gray-400 py-1 text-center">USFM 1</th>
                  <th className="border border-gray-400 py-1 text-center">USFM 2</th>
                  <th className="border border-gray-400 py-1 text-center">USFM 3</th>
                  <th className="border border-gray-400 py-1 text-center">USFM 4</th>
                  <th className="border border-gray-400 py-1 text-center"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-400 py-1 text-center"> 1</td>
                  <td className="border border-gray-400 py-1 text-center"></td>
                  <td className="border border-gray-400 py-1 text-center"></td>
                  <td className="border border-gray-400 py-1 text-center">
                    <div className="flex items-center justify-center text-green-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </td>
                  <td className="border border-gray-400 py-1 text-center"></td>
                  <td className="border border-gray-400 py-1 text-center">
                    
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-400 py-1 text-center"> 2</td>
                  <td className="border border-gray-400 py-1 text-center">
                    <div className="flex items-center justify-center">
                      <input type="radio" name="row2" className="h-4 w-4" defaultChecked={false} />
                    </div>
                  </td>
                  <td className="border border-gray-400 py-1 text-center">
                    <div className="flex items-center justify-center">
                      <input type="radio" name="row2" className="h-4 w-4" defaultChecked={false} />
                    </div>
                  </td>
                  <td className="border border-gray-400 py-1 text-center"></td>
                  <td className="border border-gray-400 py-1 text-center">
                    <div className="flex items-center justify-center">
                      <input type="radio" name="row2" className="h-4 w-4" defaultChecked={false} />
                    </div>
                  </td>
                  <td className="border border-gray-400 py-1 text-center">
                    <Button variant="outline" className="h-6">Compare</Button>
                  </td>
                </tr>
              </tbody>
            </table>
            
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <div className="flex w-full items-center justify-around">
            <Button type="submit">Merge</Button>
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
            </div>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
export default MergeDialog