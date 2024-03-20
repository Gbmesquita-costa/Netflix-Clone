"use client"

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function SearchMovie(): JSX.Element {
    const search = useSearchParams()

    const [searchQuery, setSearchQuery] = useState(search ? search.get("q") : null)
    const [openDialog, setOpenDialog] = useState<boolean>(false)

    const router = useRouter()

    const handleOpenDialog = () => {
        setOpenDialog(!openDialog)
    }

    const onSearch = async (event: React.FormEvent) => {
        event.preventDefault()
        
        const encodedSearchQuery = encodeURIComponent(searchQuery || "")

        router.push(`/home/search?q=${encodedSearchQuery}`)
        handleOpenDialog()
    }

    return (
        <Dialog onOpenChange={handleOpenDialog} open={openDialog}>
            <DialogTrigger asChild>
                <Search className="w-5 h-5 text-gray-300 cursor-pointer" />
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Search</DialogTitle>
                    <DialogDescription>
                        Search for any titles or categories...
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={onSearch}>
                    <div className="w-full h-full flex items-center space-x-2">
                        <div className="grid flex-1 gap-2">
                            <Input
                                id="link"
                                type="text"
                                value={searchQuery || ""}
                                onChange={(event) => setSearchQuery(event.target.value)}
                                placeholder="Search..."
                                className="outline-none"
                            />
                        </div>
                        <Button
                            type="submit"
                            variant={"ghost"}
                            size="sm"
                            className="h-full"
                        >
                            <Search />
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}